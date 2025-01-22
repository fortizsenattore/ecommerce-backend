const { Product } = require("../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function index(req, res) {
  try {
    const products = await Product.findAll({ include: "brand" });
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.json({ error: err });
  }
}

async function show(req, res) {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ where: { id: productId }, include: "brand" });
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
}

async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      console.log({ fields, files });
      const { model, description, featured, price, stock, year, engine, brandId } = fields;
      const createProduct = await Product.create({
        model,
        description,
        image: files.images.newFilename,
        imageProduct: files.images.newFilename,
        photos: [files.images.newFilename],
        featured,
        price: Number(price),
        stock: Number(stock),
        year: Number(year),
        engine,
        brandId: Number(brandId),
      });
      const { data, error } = await supabase.storage
        .from("img")
        .upload(files.images.newFilename, fs.createReadStream(files.images.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.images.mimeType,
          duplex: "half",
        });

      const product = await Product.findOne({ where: { id: createProduct.id }, include: "brand" });
      return res.status(200).json(product);
    });
  } catch (err) {
    console.error(err);
  }
}

async function update(req, res) {
  try {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const { model, description, featured, price, stock, year, engine, brandId } = fields;
      await Product.update(
        {
          model,
          description,
          image: files.images.newFilename,
          imageProduct: files.images.newFilename,
          /* photos: [], */
          featured: featured,
          price: Number(price),
          stock: Number(stock),
          year: Number(year),
          engine,
          brandId: Number(brandId),
        },
        { where: { id: req.params.id } },
      );
      const product = await Product.findByPk(req.params.id, { include: "brand" });
      return res.status(200).json(product);
    });
  } catch (err) {
    console.error(err);
  }
}
async function destroy(req, res) {
  try {
    const product = Product.destroy({ where: { id: req.params.id } });
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

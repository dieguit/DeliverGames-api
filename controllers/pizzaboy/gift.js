const Gift = require('../../models/pizzaboy/gift')
const Item = require('../../models/pizzaboy/item')

const getGiftList = (req, res) => {
  Gift.find({}, (err, gifts) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    res.status(200).send({gifts});
  })
}

const getGift = (req, res) => {
  let giftId = req.params.giftId;

  Gift.findById(giftId, (err, gift) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!gift)
      return res.status(404).send({message: `That gift does not exist.`});

    res.status(200).send({gift});
  })
}

const createGift = (req, res) => {
  let gift = new Gift();

  gift.code = req.body.code;
  gift.item = req.body.item;
  gift.expires = req.body.expires;
  gift.users = req.body.users;

  gift.save((err, createdGift) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}`});

    res.status(200).send({createdGift});
  })
}

module.exports = {
  getGiftList,
  getGift,
  createGift
}

//
// function updateProduct(req, res){
//   const productId = req.params.productId
//   let update = req.body
//
//   Product.findByIdAndUpdate(productId, update, (err, product) => {
//     if (err) return res.status(500).send({ message: `Error al actualizar el producto: ${err}.` })
//
//     res.status(200).send({ product })
//   })
// }
//
// function deleteProduct(req, res){
//   const productId = req.params.productId
//
//   Product.findById(productId, (err, product) => {
//     if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}.` })
//
//     product.remove(err => {
//       if (err) return res.status(500).send({ message: `Error al borrar el producto: ${err}.` })
//
//       res.status(200).send({ message: `El producto ha sido eliminado` })
//     })
//   })
// }

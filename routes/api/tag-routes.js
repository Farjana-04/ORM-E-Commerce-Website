const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// router.get('/', async (req, res) => {
//   // find all tags
//   // be sure to include its associated Product data
//   try {
//     const tagData = await Tag.findAll({
//       attributes: ['id', 'tag_name'],
//       include: [
//         {
//             model: Product,
//             attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
//         },
//       //   {
//       //     model: ProductTag,
//       //     attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
//       // }
//     ]
//     });
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', async(req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
//   //we can use findOne()
//  try {
//       const tagData = await Tag.findByPk(req.params.id, {
//         // attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
//         include: [
//           {
//               model: Product,
//               attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
//           }
//       ]
//       });

//       if (!tagData) {
//         res.status(404).json({ message: 'No tag found with that id!' });
//         return;
//       }

//       res.status(200).json(tagData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
// router.post('/', async(req, res) => {
//   // create a new tag
//   try {
//     const tagData = await Tag.create({
//       tag_name: req.body.tag_name
//     })
//     .then((tag) => {
//     if (req.body.productIds && req.body.productIds.length) {
//       const productTagIdArr = req.body.productIds.map((product_id) => {
//         return {
//           product_id,
//           tag_id: tag.id,
//         };
//       });
//       return ProductTag.bulkCreate(productTagIdArr);
//     }
//     // if no product tags, just respond
  
//   })
//   .then((productTagIds) => res.status(200).json(productTagIds))
//   .catch((err) => {
//     console.log(err);
//     res.status(400).json(err);
//   });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.put('/:id', async (req, res) => {
//   // update a tag's name by its `id` value
//  // update a category by its `id` value
//   try {
//       const tagData = await Tag.update(req.body, {
//         where: {
//           id: req.params.id,
//         },
//         individualHooks: true
//       });
//       if (!tagData[0]) {
//         res.status(404).json({ message: 'No tag with this id!' });
//         return;
//       }
//       res.status(200).json(tagData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// router.delete('/:id', async (req, res) => {
//   // delete on tag by its `id` value
//   try {
//     const tagData = await Tag.destroy({
//       where: {
//         id: req.params.id,
//       }
//     });
//     if (!tagData) {
//       res.status(404).json({ message: 'No tag found with that id!' });
//       return;
//     }

//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// module.exports = router;

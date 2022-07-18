// Exercício 1: Retorne o documento com o _id igual a 8.
// db.bios.find({"_id" : 8})

// Exercício 2: Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name.
// db.bios.find({ _id: 8 }, { name: 1 })

// Exercício 3: Retorne apenas os atributos name e birth do documento com o _id igual a 8.
// db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 })

// Exercício 7: Retorne a quantidade de documentos da coleção books.
// db.books.countDocuments({})

// Exercício 8: Conte quantos livros existem com o status = "PUBLISH".
// db.books.countDocuments({ status: "PUBLISH" })

// Exercício 9: Exiba os atributos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id.
// db.books.find({ status: "MEAP" }, { title: 1, authors: 1, status: 1 }).skip(5).limit(10).pretty()
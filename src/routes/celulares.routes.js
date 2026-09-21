celularRouter.get("/", async (req, res) => {
    const Celulares = await celularService.getAll();
    return res.json(Celulares)
});

celularRouter.post("/", async (req, res) =>{
    const Celulares = await celularService.create(req.body);
    return res.status(201).json(Celulares) 
});

export default celularRouter
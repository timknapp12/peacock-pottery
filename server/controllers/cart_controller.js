module.exports = {
    update: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;
        //can I call params.id whatever I want or does it need to be product_id???
        db.add_to_cart([params.id])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    }
}
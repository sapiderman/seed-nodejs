
import request from 'superagent';


async function getTime(req, res, next) {

    try {
        const result = await request.get('https://worldtimeapi.org/api/ip')
        .set('Accept', 'application/json');

        return res.status(200).json(result.body);

    } catch (err) {
        return res.status(400).json({ message: 'cannot reach host', code: err });
    }
}

export default getTime;


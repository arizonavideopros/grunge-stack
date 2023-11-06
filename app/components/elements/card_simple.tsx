import PropTypes from 'prop-types';


interface CardProps {
    title: string;
    body: string;
}

function Card({ title, body }: CardProps): JSX.Element {

    return (
        <div className="bg-white shadow-lg border rounded-lg p-4">
            <h4 className="font-medium text-lg mb-2">{title}</h4>
            <p className="text-gray-500">{body}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Card;

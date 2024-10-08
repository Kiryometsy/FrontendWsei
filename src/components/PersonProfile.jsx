import PropTypes from 'prop-types';

const PersonProfile = ({ person }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">ID: {person.id}</p>
                <p className="card-text">Birth Date: {person.birth}</p>
                <p className="card-text">Eye Color: {person.eyes}</p>
            </div>
        </div>
    );
};

PersonProfile.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        birth: PropTypes.string.isRequired,
        eyes: PropTypes.string.isRequired,
    }).isRequired
};

export default PersonProfile;

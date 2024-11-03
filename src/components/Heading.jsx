

const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center my-10">
            <h1 className="font-semibold text-3xl mb-5">{title}</h1>
            <p className="text-lg text-gray-600 font-thin">{subtitle}</p>
        </div>
    );
};

export default Heading;
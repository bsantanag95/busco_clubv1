const Title = ({ titulo, icon }) => {
    return (
        <>
            <span className="text-green-500">{icon}</span>
            <span className="tracking-wide">{titulo}</span>
        </>
    );
};

export default Title;

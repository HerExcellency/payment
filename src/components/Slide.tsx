import women from '../assets/Img/img-one.jpg'
import gram from '../assets/Img/gram.jpg'
import native from '../assets/Img/img-three.jpg'

const images = [
    native,
    gram,
    women,
];

const Slide: React.FC = () => {
    return (
        <div className="flex flex-row md:justify-between overflow-x-auto space-x-4 md:space-x-0">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full md:w-1/3 flex-shrink-0 p-3 rounded-lg"
                    style={{borderRadius: '20px'}}
                />
            ))}
        </div>
    );
};

export default Slide;

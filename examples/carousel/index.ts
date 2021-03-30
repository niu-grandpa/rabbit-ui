import Rabbit from '../../src';

export default function carouselTest(): void {
    const carousel = new Rabbit.Carousel();
    carousel.config('#test').events({
        onChange: ([oldValue, value]) => {
            console.log(`原幻灯片索引: ${oldValue}`, `目前激活索引: ${value}`);
        },
        onClick: (index) => {
            console.log(index);
        }
    });
}

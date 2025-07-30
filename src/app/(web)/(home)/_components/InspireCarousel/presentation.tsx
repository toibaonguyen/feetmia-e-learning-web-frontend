import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export default function InspireCarousel() {
    return (
        <Carousel className="w-full flex items-center justify-center m-0 [&>div:first-child]:w-full"
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
            opts={{
                align: "start",
                loop: true,

            }}>
            <CarouselContent className="m-0">
                <CarouselItem className="p-0 m-0">
                    <div className="flex items-center justify-center h-fit w-full relative">
                        <img src={`/assets/inspiration/2.jpg`} alt="inspire-carousel" className="w-full h-[400px] object-cover" />
                        <Card className="absolute top-8 left-8 hidden sm:block sm:w-[340px] md:w-[440px] h-fit">
                            <CardContent>
                                <h1 className="text-3xl font-bold">Skills that propel you forward</h1>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Keep up with the rapid pace of technological change and evolving job demands. Gain the skills you need to achieve your goals and stay competitive.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="p-0 m-0">
                    <div className="flex items-center justify-center h-fit w-full relative">
                        <img src={`/assets/inspiration/1.jpg`} alt="inspire-carousel" className="w-full h-[400px] object-cover" />
                        <Card className="absolute top-8 left-8 hidden sm:block sm:w-[340px] md:w-[440px] h-fit">
                            <CardContent>
                                <h1 className="text-3xl font-bold">Learn what you're interested in</h1>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Skills for today — and your future. Start learning with us.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}
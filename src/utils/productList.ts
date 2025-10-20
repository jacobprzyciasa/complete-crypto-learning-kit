import { StaticImageData } from "next/image";
import I_Will_Teach_You_How_To_Read_Again_Demo from "../../public/I_Will_Teach_You_How_To_Read_Again_Demo.jpg"
import I_Will_Teach_You_How_To_Read_Again from "../../public/I_Will_Teach_You_How_To_Read_Again.jpg"
import What_If_You_Could_Prepare_for_the_Future_Demo from "../../public/What_If_You_Could_Prepare_for_the_Future_Demo.jpg"
import What_If_You_Could_Prepare_for_the_Future from "../../public/What_If_You_Could_Prepare_for_the_Future.jpg"
import Chart_Master from "../../public/Chart_Master.jpg"
import Special_Offer from "../../public/Special_Offer.jpg"

export interface productListTypes {
    name: string;
    description: string;
    image: StaticImageData;
    url: string;
}

export const productList: productListTypes[] = [
    {
        name: "What If You Could Prepare For The Future DEMO",
        description: "Free demo of the best way to start with crypto world",
        image: What_If_You_Could_Prepare_for_the_Future_Demo,
        url: "https://whop.com/complete-crypto-learning-kit/prepare-for-the-future-demo/"
    },
    {
        name: "What If You Could Prepare For The Future",
        description: "Everything you need to know about emerging technology",
        image: What_If_You_Could_Prepare_for_the_Future,
        url: "https://whop.com/complete-crypto-learning-kit/prepare-for-the-future-pdf-full/"
    },
    {
        name: "I Will Teach You How To Read Again DEMO",
        description: "Demo version of the fundamentals of chart analysis",
        image: I_Will_Teach_You_How_To_Read_Again_Demo,
        url: "https://whop.com/complete-crypto-learning-kit/chart-reading-demo"
    },
    {
        name: "I Will Teach You How To Read Again",
        description: "Learn how to look for the price action + bonuses",
        image: I_Will_Teach_You_How_To_Read_Again,
        url: "https://whop.com/complete-crypto-learning-kit/chart-reading-pdf/"
    },
    {
        name: "Chart Master Tool",
        description: "Train concepts from the PDF in real time on your own chart",
        image: Chart_Master,
        url: "https://whop.com/complete-crypto-learning-kit/chart-master/"
    },
    {
        name: "Special Offer",
        description: "I Will Teach You How To Read Again + Chart Master",
        image: Special_Offer,
        url: "https://whop.com/complete-crypto-learning-kit/special-offer-6c"
    },
]
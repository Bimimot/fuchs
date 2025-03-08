import About from "sections/About.vue";
import Price from "sections/Price.vue";
import Person from "sections/Person.vue";
import Lesson from "sections/Lesson.vue";

export enum RoutesIds {
    Persons = "persons",
    About = "about",
    Price = "price",
    Review = "review",
    Lesson = "lesson",
};

export const routes = [
    {
        id: RoutesIds.Persons,
        headerTitle: "Кто мы",
        popupTitle: "Кто мы",
        component: Person,
    },
    {
        id: RoutesIds.About,
        headerTitle: "О занятиях",
        popupTitle: "О занятиях",
        component: About,
    },
    {
        id: RoutesIds.Price,
        headerTitle: "Стоимость",
        popupTitle: "Стоимость",
        component: Price,
    },
    {
        id: RoutesIds.Review,
        headerTitle: "Отзывы",
        popupTitle: "Отзывы",
        // component: "Отзывы",
    },
    {
        id: RoutesIds.Lesson,
        headerTitle: "",
        popupTitle: "Контакты",
        component: Lesson,
    },
];
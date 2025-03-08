import About from "sections/About.vue";
import Price from "sections/Price.vue";
import Person from "sections/Person.vue";
import Contacts from "sections/Contacts.vue";

export enum RoutesIds {
    Persons = "persons",
    About = "about",
    Price = "price",
    Review = "review",
    Contacts = "contacts",
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
        id: RoutesIds.Contacts,
        headerTitle: "",
        popupTitle: "Контакты",
        component: Contacts,
    },
];
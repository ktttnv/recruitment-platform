import User from '../../server/models/typescript/user';
import { RoleEnum } from '../../client/models/User';
import Role from '../../server/models/typescript/role';
import { getBase64FromUrl } from '../../client/utils/photo';

export function getUsersData(rols: Role[]): User[] {
    const rolesById = rols.reduce((result: Record<string, Role>, role: Role) => {
        result[role.roleId] = role;
        return result;
    }, {});

    return [
        {
            name: 'Александр',
            surname: 'Блок',
            patronymic: 'Александрович',
            email: 'block@gmail.com',
            password: 'b12345',
            role: rolesById[RoleEnum.ADMIN]._id!,
            photo: getBase64FromUrl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UrcW4ulBt8P3A7HfQShwxI3oX4FRFqlTjNIKfZ2sdEzADoO3'),
        },
        {
            name: 'Адександр',
            surname: 'Овечкин',
            patronymic: 'Михайлович',
            email: 'ovechkin@gmail.com',
            password: 'o12345',
            role: rolesById[RoleEnum.ADMIN]._id!,
            photo: getBase64FromUrl('https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/2d/92/2de2ca9cabb6dbd3ae604c0a96ddce526406d404d6765656099408.jpg'),
        },
        {
            name: 'Лев',
            surname: 'Толстой',
            patronymic: 'Николаевич',
            email: 'tolstoy@gmail.com',
            password: 't12345',
            role: rolesById[RoleEnum.HR]._id!,
            photo: getBase64FromUrl('https://briefly.ru/static/cache/authors/320/tolstoi.jpeg?1664530296'),
        },
        {
            name: 'Владимир',
            surname: 'Маяковский',
            patronymic: 'Владимирович',
            email: 'mayakovskiy@gmail.com',
            password: 'm12345',
            role: rolesById[RoleEnum.HR]._id!,
            photo: getBase64FromUrl('https://historyrussia.org/images/25012023_1.jpg'),
        },
        {
            name: 'Петр',
            surname: 'Чайковский',
            patronymic: 'Ильич',
            email: 'chaikovckiy@gmail.com',
            password: 'c12345',
            role: rolesById[RoleEnum.HR]._id!,
            photo: getBase64FromUrl('https://www.belcanto.ru/media/images/uploaded/18042901.jpg'),
        },
        {
            name: 'Анна',
            surname: 'Горенко',
            patronymic: 'Ахматова',
            email: 'ahmatova@gmail.com',
            password: 'a12345',
            role: rolesById[RoleEnum.HR]._id!,
            photo: getBase64FromUrl('https://spadilo.ru/wp-content/uploads/2020/04/%D0%90%D1%85%D0%BC%D0%B0%D1%82%D0%BE%D0%B2%D0%B0.jpg'),
        },
        {
            name: 'Марина',
            surname: 'Цветаева',
            patronymic: 'Иванова',
            email: 'stvetaeva@gmail.com',
            password: 's12345',
            role: rolesById[RoleEnum.EMPLOYEE]._id!,
            photo: getBase64FromUrl('https://interesnyefakty.org/wp-content/uploads/Biografiya-TSvetaevoy-1.jpg'),
        },
        {
            name: 'Илья',
            surname: 'Репин',
            patronymic: 'Ефимович',
            email: 'repin@gmail.com',
            password: 'r12345',
            role: rolesById[RoleEnum.EMPLOYEE]._id!,
            photo: getBase64FromUrl('https://rus.team/images/article/5936/2019-08-03-348_16934-1_927726.webp'),
        },
        {
            name: 'Иван',
            surname: 'Шишкин',
            patronymic: 'Иванович',
            email: 'shihkin@gmail.com',
            password: 's12345',
            role: rolesById[RoleEnum.EMPLOYEE]._id!,
            photo: getBase64FromUrl('https://www.calend.ru/img/content_persons/i1/1270.jpg'),
        },
        {
            name: 'Виктор',
            surname: 'Васнецов',
            patronymic: 'Михайлович',
            email: 'vasnecov@gmail.com',
            password: 'v12345',
            role: rolesById[RoleEnum.USER]._id!,
            photo: getBase64FromUrl('https://cdn.culture.ru/images/f69b621f-c657-52c0-8225-0f78800f573b'),
        },
        {
            name: 'Язид',
            surname: 'Зинедин',
            patronymic: 'Зидан',
            email: 'zidan@gmail.com',
            password: 'z12345',
            role: rolesById[RoleEnum.USER]._id!,
            photo: getBase64FromUrl('https://s5o.ru/storage/simple/ru/edt/e8/27/16/48/ruea83869df53.jpg'),
        },
        {
            name: 'Виктор',
            surname: 'Онопко',
            patronymic: 'Савельевич',
            email: 'onopko@gmail.com',
            password: 'o12345',
            role: rolesById[RoleEnum.USER]._id!,
            photo: getBase64FromUrl('https://s5o.ru/storage/simple/ru/edt/37/fe/53/d8/rue869ed10cf9.png'),
        },
    ];
}

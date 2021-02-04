import {
    Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
} from "sequelize";
import {db} from "./bd";

interface IUser {
    id?: number
    tgId: string
    tgUsername: string
    phoneNumber: string
    userType: number
    city: string
    roleId: number
    state: string
}

enum userType {
    Regular,
    Admin,
    SuperAdmin
}

const UserType = db.define('user_types', {
    type_name: {
        type: DataTypes.STRING
    }
})

const UserRole = db.define('user_roles', {
    role_name: {
        type: DataTypes.STRING
    }
})

const BotSetting = db.define('bot_settings', {
    name: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.STRING
    }
})

const BotFAQ = db.define('bot_faq',{
    name: {
        type: DataTypes.STRING
    },
    text: {
        type: DataTypes.STRING(2000)
    }
})

const Question = db.define('questions', {
    question: {
        type: DataTypes.STRING(2000)
    },
    answer: {
        type: DataTypes.STRING(2000)
    },
    has_answer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    stats: {
        type: DataTypes.BIGINT,
        defaultValue: 1
    }
})

const User = db.define('users', {
        tg_id: {
            type: DataTypes.STRING
        },
        tg_name: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        type_id: {
            type: DataTypes.BIGINT,

            references: {
                model: UserType,
                key: 'id',
            }
        },
        role_id: {
            type: DataTypes.BIGINT,

            references: {
                model: UserRole,
                key: 'id',
            }
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.JSON
        }
    },
    {
        timestamps: false
    }
)

export  {UserRole, UserType, User, IUser, BotFAQ, BotSetting, Question}
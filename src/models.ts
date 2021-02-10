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
} from 'sequelize';
import { db } from './bd';

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

const UserType = db.define('user_types', {
  type_name: {
    type: DataTypes.STRING,
  },
},
{
  timestamps: false,
});

const UserRole = db.define('user_roles', {
  role_name: {
    type: DataTypes.STRING,
  },
},
{
  timestamps: false,
});

const BotSetting = db.define('bot_settings', {
  name: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.STRING,
  },
},
{
  timestamps: false,
});

const FAQ = db.define('faqs', {
  question: {
    type: DataTypes.STRING(2000),
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING(2000),
  },
  stats: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

const UnansweredQuestion = db.define('unanswered_questions', {
  question: {
    type: DataTypes.STRING(2000),
    allowNull: false,
  },
});

const User = db.define('users', {
  tg_id: {
    type: DataTypes.STRING,
    unique: true,
  },
  tg_name: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
    unique: true,
  },
  type_id: {
    type: DataTypes.BIGINT,
    defaultValue: 1,

    references: {
      model: UserType,
      key: 'id',
    },
  },
  role_id: {
    type: DataTypes.BIGINT,

    references: {
      model: UserRole,
      key: 'id',
    },
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.JSON,
  },
},
{
  timestamps: false,
});

export {
  IUser, UserRole, UserType, User, BotSetting, FAQ, UnansweredQuestion,
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_types', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type_name: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    });
    await queryInterface.createTable('user_roles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      role_name: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    });
    await queryInterface.createTable('bot_settings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    });
    await queryInterface.createTable('faq_questions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING(2000),
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING(2000),
      },
      stats: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
    });
    await queryInterface.createTable('unanswered_questions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING(2000),
        allowNull: false,
      },
    });
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tg_id: {
        type: Sequelize.STRING,
        unique: true,
      },
      tg_name: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
        unique: true,
      },
      type_id: {
        type: Sequelize.BIGINT,
        defaultValue: 1,
        references: {
          model: { tableName: 'user_types' },
          key: 'id',
        },
      },
      role_id: {
        type: Sequelize.BIGINT,
        references: {
          model: { tableName: 'user_roles' },
          key: 'id',
        },
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.JSON,
      },
    },
    {
      timestamps: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('unanswered_questions');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('user_roles');
    await queryInterface.dropTable('user_types');
    await queryInterface.dropTable('faq_questions');
    await queryInterface.dropTable('bot_settings');
  },
};

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return Promise.all([
//       Promise.all([
//         queryInterface.createTable('user_types', {
//           type_name: {
//             type: Sequelize.STRING,
//           },
//         },
//         {
//           timestamps: false,
//         }),
//         queryInterface.createTable('user_roles', {
//           role_name: {
//             type: Sequelize.STRING,
//           },
//         },
//         {
//           timestamps: false,
//         }),
//       ]).then(() => (
//         queryInterface.createTable('users', {
//           tg_id: {
//             type: Sequelize.STRING,
//             unique: true,
//           },
//           tg_name: {
//             type: Sequelize.STRING,
//           },
//           phone_number: {
//             type: Sequelize.STRING,
//             unique: true,
//           },
//           type_id: {
//             type: Sequelize.BIGINT,
//             defaultValue: 1,
//             references: {
//               model: { tableName: 'user_types' },
//               key: 'id',
//             },
//           },
//           role_id: {
//             type: Sequelize.BIGINT,
//             references: {
//               model: { tableName: 'user_roles' },
//               key: 'id',
//             },
//           },
//           city: {
//             type: Sequelize.STRING,
//           },
//           state: {
//             type: Sequelize.JSON,
//           },
//         },
//         {
//           timestamps: false,
//         })
//       )),
//       queryInterface.createTable('unanswered_questions', {
//         question: {
//           type: Sequelize.STRING(2000),
//           allowNull: false,
//         },
//       }),
//       queryInterface.createTable('faq_questions', {
//         question: {
//           type: Sequelize.STRING(2000),
//           allowNull: false,
//         },
//         answer: {
//           type: Sequelize.STRING(2000),
//         },
//         stats: {
//           type: Sequelize.INTEGER,
//           defaultValue: 1,
//         },
//       }),
//       queryInterface.createTable('bot_settings', {
//         name: {
//           type: Sequelize.STRING,
//         },
//         value: {
//           type: Sequelize.STRING,
//         },
//       },
//       {
//         timestamps: false,
//       }),
//     ]);
//   },

//   down: async (queryInterface) => {
//     return Promise.all([
//       queryInterface.dropTable('users')
//         .then(() => (
//           Promise.all([
//             queryInterface.dropTable('user_roles'),
//             queryInterface.dropTable('user_types'),
//           ])
//         )),
//       queryInterface.dropTable('questions'),
//       queryInterface.dropTable('faqs'),
//       queryInterface.dropTable('settings'),
//     ]);
//   },
// };

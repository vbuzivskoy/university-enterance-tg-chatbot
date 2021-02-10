module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('user_roles', [
      {
        role_name: 'User',
      },
      {
        role_name: 'Admin',
      },
      {
        role_name: 'Superadmin',
      },
    ]);
    await queryInterface.bulkInsert('user_types', [
      {
        type_name: 'Enrollee',
      },
      {
        type_name: 'Student',
      },
      {
        type_name: 'Parent',
      },
      {
        type_name: 'Teacher',
      },
      {
        type_name: 'Other',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface
      .bulkDelete('user_roles', null, {});
    await queryInterface
      .bulkDelete('user_types', null, {});
  },
};


exports.up = function(knex) {
  return knex.schema.table('users', tbl => {
    tbl.string('role');
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', tbl => {
    tbl.dropColumn;
  })  
};

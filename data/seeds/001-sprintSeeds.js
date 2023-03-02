/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert(
    {"resource_id":1,"resource_name":"foo","resource_description":null},
  );
  await knex('projects').del()
  await knex('projects').insert(
    {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false},
  );
  
  await knex('tasks').del()
  await knex('tasks').insert(
    {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id" :1},
  );
};
const fs = require('fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(`${path}`, 'utf-8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    const results = lines.slice(1).map((line) => {
      const values = line.split(',');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = values[index].trim();
      });
      return obj;
    });
    const fieldMap = {};

    results.forEach((student) => {
      const { field } = student;
      if (!fieldMap[field]) {
        fieldMap[field] = { count: 0, names: [] };
      }
      fieldMap[field].count += 1;
      fieldMap[field].names.push(student.firstname);
    });
    console.log(`Number of Students: ${results.length}`);

    for (const [field, { count, names }] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;

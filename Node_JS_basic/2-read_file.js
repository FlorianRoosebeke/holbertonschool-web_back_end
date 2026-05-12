En partant de ton code, il faut surtout corriger 4 points : tu redéclares students deux fois, line n’existe pas, for...in n’est pas adapté pour parcourir directement les lignes comme tu le fais, et il faut d’abord découper chaque ligne avec split(','). Lire un fichier avec fs.readFileSync(path, 'utf-8'), puis split('\n') pour obtenir les lignes, est une approche valide pour un CSV simple.

Version corrigée
Voici une version qui compte les étudiants et regroupe par field en gardant les firstname :

javascript
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lignes = data.split('\n').filter((line) => line.trim() !== '');

    const students = lignes.slice(1); // enlève l'en-tête
    const fields = {};

    for (const student of students) {
      const [firstname, lastname, age, field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    }

    console.log(`Nombre d'étudiants: ${students.length}`);

    for (const field in fields) {
      console.log(
        `Nombre d'étudiants en ${field}: ${fields[field].length}. Liste: ${fields[field].join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
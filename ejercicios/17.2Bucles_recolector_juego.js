// Usa bucles para ser eficiente
// Ejemplo: robot.repeat(3, () => robot.moveRight())
// O usa for: for (let i = 0; i < 3; i++) { robot.moveRight(); }

// Tu codigo aqui:

//robot.repeat(3, () => robot.moveRight())
//robot.repeat(4, () => robot.moveDown())
//robot.repeat(3, () => robot.moveRight())

for (let i = 0; i < 5; i++) { robot.moveRight(); }
for (let i = 0; i < 1; i++) { robot.moveDown(); }
for (let i = 0; i < 2; i++) { robot.moveLeft(); }
for (let i = 0; i < 3; i++) { robot.moveDown(); }
for (let i = 0; i < 3; i++) { robot.moveRight(); }
const canvas = document.getElementById('allShapesCanvas');
const ctx = canvas.getContext('2d');

// **1. Filled Rectangle**
ctx.fillStyle = "blue"; // Set fill color to blue
ctx.fillRect(20, 20, 100, 50); // Draw a filled rectangle (x, y, width, height)

// **2. Outlined Rectangle**
ctx.strokeStyle = "red"; // Set outline color to red
ctx.lineWidth = 3; // Set line width for the outline
ctx.strokeRect(140, 20, 100, 50); // Draw an outlined rectangle

// **3. Line**
ctx.beginPath(); // Start a new path
ctx.moveTo(20, 100); // Move the pen to the starting point (x1, y1)
ctx.lineTo(200, 100); // Draw a line to (x2, y2)
ctx.strokeStyle = "green"; // Set line color to green
ctx.lineWidth = 2; // Set line width
ctx.stroke(); // Render the line

// **4. Circle**
ctx.beginPath(); // Start a new path
ctx.arc(300, 100, 40, 0, Math.PI * 2); // Draw a circle (x, y, radius, startAngle, endAngle)
ctx.fillStyle = "purple"; // Set fill color to purple
ctx.fill(); // Fill the circle
ctx.stroke(); // Outline the circle

// **5. Ellipse**
ctx.beginPath(); // Start a new path
ctx.ellipse(100, 200, 60, 30, 0, 0, Math.PI * 2); // Draw an ellipse (x, y, radiusX, radiusY, rotation, startAngle, endAngle)
ctx.fillStyle = "orange"; // Set fill color to orange
ctx.fill(); // Fill the ellipse
ctx.stroke(); // Outline the ellipse

// **6. Triangle**
ctx.beginPath(); // Start a new path
ctx.moveTo(200, 200); // Move to the first vertex (x1, y1)
ctx.lineTo(250, 250); // Draw a line to the second vertex (x2, y2)
ctx.lineTo(150, 250); // Draw a line to the third vertex (x3, y3)
ctx.closePath(); // Close the path to form a triangle
ctx.fillStyle = "cyan"; // Set fill color to cyan
ctx.fill(); // Fill the triangle
ctx.stroke(); // Outline the triangle

// **7. Polygon (Pentagon)**
ctx.beginPath(); // Start a new path
const centerX = 350, centerY = 250, radius = 50, sides = 5;
for (let i = 0; i < sides; i++) {
    const angle = (Math.PI * 2 / sides) * i - Math.PI / 2; // Calculate the angle for each vertex
    const x = centerX + radius * Math.cos(angle); // X-coordinate of the vertex
    const y = centerY + radius * Math.sin(angle); // Y-coordinate of the vertex
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); // Move to the first vertex or draw a line to the next
}
ctx.closePath(); // Close the path to complete the pentagon
ctx.fillStyle = "pink"; // Set fill color to pink
ctx.fill(); // Fill the pentagon
ctx.stroke(); // Outline the pentagon

// **8. Quadratic Curve**
ctx.beginPath(); // Start a new path
ctx.moveTo(50, 300); // Move to the start point (x1, y1)
ctx.quadraticCurveTo(150, 250, 250, 300); // Create a quadratic curve (cpX, cpY, x2, y2)
ctx.strokeStyle = "brown"; // Set stroke color to brown
ctx.lineWidth = 2; // Set line width
ctx.stroke(); // Render the curve

// **9. Bezier Curve**
ctx.beginPath(); // Start a new path
ctx.moveTo(300, 300); // Move to the start point (x1, y1)
ctx.bezierCurveTo(350, 250, 450, 350, 400, 300); // Create a bezier curve (cp1X, cp1Y, cp2X, cp2Y, x2, y2)
ctx.strokeStyle = "teal"; // Set stroke color to teal
ctx.lineWidth = 2; // Set line width
ctx.stroke(); // Render the curve

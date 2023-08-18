/* Area of triangle */
function calculateTriangleArea() {
  const baseTriangle = getInputValue("baseTriangle");
  const heightTriangle = getInputValue("heightTriangle");

  const area = 0.5 * baseTriangle * heightTriangle;
  
  outputShow("baseTriangle", area);
}

/* Area of Rectangle */
function calculateRectangleArea() {
  const widthRectangle = getInputValue("widthRectangle");
  const lengthRtrectangle = getInputValue("lengthRtrectangle");

  const area = widthRectangle * lengthRtrectangle;

  outputShow("widthRectangle", area);
}

/* Area of Parellelogram */
function calculateParallelogramArea() {
  const baseParallelogram = getInputValue("baseParallelogram");
  const heightParallelogram = getInputValue("heightParallelogram");
  
  const area = baseParallelogram * heightParallelogram;
  
  outputShow("baseParallelogram", area);
}

/* Area of Rhombus */
function calculateRhombusArea() {
  const baseRhombus = getInputValue("baseRhombus");
  const heightRhombus = getInputValue("heightRhombus");
  
  const area = 0.5 * baseRhombus * heightRhombus;
  
  outputShow("baseRhombus", area);
}

/* Area of Pentagon */
function calculatePentagonArea() {
  const paraPentagon = getInputValue("paraPentagon");
  const heightPentagon = getInputValue("heightPentagon");
  
  const area = 0.5 * paraPentagon * heightPentagon;
  
  outputShow("paraPentagon", area);
}

/* Area of Ellipse */
function calculateEllipseArea() {
  const majorEllipse = getInputValue("majorEllipse");
  const minorEllipse = getInputValue("minorEllipse");

  const area = Math.PI * majorEllipse * minorEllipse;

  outputShow("majorEllipse", area);
}

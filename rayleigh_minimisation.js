function updateEquation() {
    var x = [
        -1.01405469, -1.01899073, -1.08964263, -0.97178714, -1.00522747,
        -0.73263941,  0.5019477 ,  1.34810808,  0.74359623,  0.8278407 ,
        1.34810808,  1.06274127
    ]

    var idx_0 = document.getElementById('x0').value;
    var idx_1 = document.getElementById('x1').value;

    var x0 = x[idx_0]
    var x1 = x[idx_1]

    var sub = x0 - x1
    var sq = sub * sub

    var equationText = `$$
        \\begin{align*}
            (x_{${idx_0}} - x_{${idx_1}})^{2} &= (${x0.toFixed(3)} - ${x1.toFixed(3)})^{2} \\\\
            &= ${sub.toFixed(3)}^{2} \\\\
            &= ${sq.toFixed(3)}
        \\end{align*}
        $$
    `;

    var equationElement = document.getElementById('rayleigh_min_equation');
    equationElement.innerHTML = equationText;

    Reveal.updateSlides();
}
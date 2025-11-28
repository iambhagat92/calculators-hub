const routes = {
    // HOME
    '/': {
        title: 'Calculators Hub — Online Calculators for Math, Finance & Health',
        description: 'Free online calculators for finance, math, health, and more. Calculate percentages, EMI, BMI, mortgages, and solve equations instantly.',
        render: () => `
            <section class="text-center" style="padding: 4rem 0;">
                <h1>Calculators Hub</h1>
                <p style="margin: 0 auto;">Your one-stop destination for accurate, free online calculators. Solve math problems, plan your finances, and track your health.</p>
            </section>
            <section>
                <h2>Browse by Category</h2>
                <div class="grid grid-2 mt-lg">
                    <a href="#/math" class="card">
                        <h3>Math Calculators</h3>
                        <p>Percentage, Quadratic Equation, GPA, Derivatives, and more.</p>
                    </a>
                    <a href="#/finance" class="card">
                        <h3>Finance Calculators</h3>
                        <p>EMI, Mortgage, Compound Interest, Loans.</p>
                    </a>
                    <a href="#/health" class="card">
                        <h3>Health Calculators</h3>
                        <p>BMI, BMR, Calorie needs, Pregnancy due date.</p>
                    </a>
                    <a href="#/general" class="card">
                        <h3>General Tools</h3>
                        <p>Basic calculators and unit conversions.</p>
                    </a>
                </div>
            </section>
        `
    },
    
    // HUBS
    '/general': {
        title: 'General Calculators - Calculators Hub',
        description: 'Basic calculators and everyday tools.',
        render: () => renderHub('General Calculators', 'Everyday tools for quick calculations.', [
            { title: 'What Is a Calculator?', link: '#/general/what-is-a-calculator' },
            { title: 'Types of Calculators', link: '#/general/types-of-calculators' },
            { title: 'Scientific vs Basic', link: '#/general/scientific-vs-basic' },
            { title: 'How Online Calculators Work', link: '#/general/how-it-works' },
            { title: 'Calculator History', link: '#/general/history' }
        ])
    },
    '/math': {
        title: 'Math Calculators - Solve Equations & Graphing',
        description: 'Free math tools: Percentage, Quadratic Solver, GPA, Derivatives, and Graphing.',
        render: () => renderHub('Math Calculators', 'Solve complex math problems instantly with our suite of free tools.', [
            { title: 'Percentage Calculator', link: '#/math/percentage' },
            { title: 'Quadratic Equation Solver', link: '#/math/quadratic' },
            { title: 'GPA Calculator', link: '#/math/gpa' },
            { title: 'Equation Solver & Derivative', link: '#/math/derivative' },
            { title: 'Graphing Tool', link: '#/math/graphing' },
            { title: 'Matrix Calculator', link: '#/math/matrix' },
            { title: 'Statistics Calculator', link: '#/math/statistics' }
        ])
    },
    '/finance': {
        title: 'Finance Calculators - EMI, Mortgage & Interest',
        description: 'Plan your financial future with EMI, Mortgage, and Compound Interest calculators.',
        render: () => renderHub('Finance Calculators', 'Make informed financial decisions with our precise calculators.', [
            { title: 'EMI Calculator', link: '#/finance/emi' },
            { title: 'Mortgage Calculator', link: '#/finance/mortgage' },
            { title: 'Compound Interest Calculator', link: '#/finance/compound-interest' },
            { title: 'Loan Calculator', link: '#/finance/loan' },
            { title: 'Tax Calculator', link: '#/finance/tax' },
            { title: 'ROI Calculator', link: '#/finance/roi' },
            { title: 'Inflation Calculator', link: '#/finance/inflation' },
            { title: 'Salary to Hourly', link: '#/finance/salary-to-hourly' }
        ])
    },
    '/health': {
        title: 'Health Calculators - BMI, BMR & Calories',
        description: 'Track your health metrics with BMI, BMR, and Calorie calculators.',
        render: () => renderHub('Health Calculators', 'Monitor your health and fitness goals.', [
            { title: 'BMI Calculator', link: '#/health/bmi' },
            { title: 'BMR Calculator', link: '#/health/bmr' },
            { title: 'Calorie Calculator', link: '#/health/calorie' },
            { title: 'Pregnancy Due Date', link: '#/health/pregnancy' },
            { title: 'Calorie Deficit Guide', link: '#/health/deficit-guide' }
        ])
    },
    '/reviews': {
        title: 'Product Reviews - Calculators Hub',
        description: 'Reviews of physical calculators and software.',
        render: () => renderHub('Product Reviews', 'Expert reviews of the best calculators for students and professionals.', [
            { title: 'Best Scientific Calculators', link: '#/reviews/best-scientific-calculators' },
            { title: 'Best Graphing Calculators', link: '#/reviews/best-graphing-calculators' },
            { title: 'Best Calculator Apps', link: '#/reviews/best-calculator-apps' },
            { title: 'Casio vs Texas Instruments', link: '#/reviews/casio-vs-ti' },
            { title: 'Best Budget Calculators', link: '#/reviews/best-budget-calculators' }
        ])
    },

    // --- GENERAL PAGES ---
    '/general/what-is-a-calculator': {
        title: 'What Is a Calculator?',
        description: 'Learn about the history and function of calculators.',
        render: () => renderArticle('What Is a Calculator?', `
            <p>A calculator is a device or software application used to perform mathematical calculations. From simple arithmetic like addition and subtraction to complex scientific equations involving calculus and trigonometry, calculators have become an essential tool in education, finance, engineering, and daily life.</p>
            <h2>What Is a Calculator?</h2>
            <p>At its core, a calculator is a machine that processes numerical data. Early calculators were mechanical devices, like the abacus, used for thousands of years. Modern electronic calculators use microchips to process binary data (0s and 1s) to perform operations.</p>
            <h2>How does a Calculator work?</h2>
            <p>Electronic calculators work by converting decimal numbers (the numbers we use, 0-9) into binary code that the processor can understand.</p>
            <ol>
                <li><strong>Input</strong>: You press keys or click buttons to enter numbers and operations.</li>
                <li><strong>Processing</strong>: The calculator's logic circuits interpret these inputs.</li>
                <li><strong>Calculation</strong>: It performs the mathematical operation using binary arithmetic.</li>
                <li><strong>Output</strong>: The result is converted back into a decimal number and displayed.</li>
            </ol>
            <h2>Example Scenarios</h2>
            <ul>
                <li><strong>School</strong>: A student uses a scientific calculator to solve a trigonometry problem.</li>
                <li><strong>Shopping</strong>: A shopper uses a percentage calculator to figure out a discount.</li>
            </ul>
            <h2>Internal Links</h2>
            <ul>
                <li><a href="#/general">General Calculators Hub</a></li>
                <li><a href="#/math/percentage">Percentage Calculator</a></li>
                <li><a href="#/finance/emi">EMI Calculator</a></li>
            </ul>
            <h2>Key Takeaways</h2>
            <ul>
                <li>Calculators are tools for performing mathematical operations quickly.</li>
                <li>They range from ancient mechanical devices to modern software apps.</li>
                <li>Always double-check your input to ensure the result is correct.</li>
            </ul>
        `)
    },
    '/general/types-of-calculators': {
        title: 'Types of Calculators',
        description: 'Discover the different types of calculators available.',
        render: () => renderArticle('Types of Calculators', `
            <p>Calculators come in many shapes and sizes, each designed for a specific purpose. Understanding the different types helps you choose the right tool for the job.</p>
            <h2>What are the different types?</h2>
            <ol>
                <li><strong>Basic Calculators</strong>: Handle the four fundamental operations (+, -, *, /).</li>
                <li><strong>Scientific Calculators</strong>: Handle trigonometry, logarithms, and exponents.</li>
                <li><strong>Graphing Calculators</strong>: Plot graphs and solve simultaneous equations.</li>
                <li><strong>Financial Calculators</strong>: Pre-programmed with formulas for interest and amortization.</li>
                <li><strong>Health Calculators</strong>: Estimate metrics like BMI and body fat.</li>
            </ol>
            <h2>Internal Links</h2>
            <ul>
                <li><a href="#/general">General Calculators Hub</a></li>
                <li><a href="#/math/graphing">Graphing Tool</a></li>
                <li><a href="#/finance/mortgage">Mortgage Calculator</a></li>
            </ul>
        `)
    },
    '/general/scientific-vs-basic': {
        title: 'Scientific vs Basic Calculator',
        description: 'What is the difference between a scientific and basic calculator?',
        render: () => renderArticle('Scientific vs Basic Calculator', `
            <p>When shopping for school supplies, you'll see options for "Basic" and "Scientific" calculators. A basic calculator is for everyday arithmetic, while a scientific calculator is for higher-level mathematics.</p>
            <h2>What is the difference?</h2>
            <p>A <strong>Basic Calculator</strong> generally has about 20 keys and performs 4-6 functions. A <strong>Scientific Calculator</strong> can have over 50 keys and perform hundreds of functions.</p>
            <h2>Comparison</h2>
            <table>
                <tr><th>Feature</th><th>Basic</th><th>Scientific</th></tr>
                <tr><td>Operations</td><td>+, -, *, /</td><td>Trig, Logs, Exponents</td></tr>
                <tr><td>Order of Ops</td><td>Often ignores</td><td>Follows PEMDAS</td></tr>
            </table>
            <h2>Internal Links</h2>
            <ul>
                <li><a href="#/math/quadratic">Quadratic Equation Solver</a></li>
                <li><a href="#/general/types-of-calculators">Types of Calculators</a></li>
            </ul>
        `)
    },
    '/general/how-it-works': {
        title: 'How Online Calculators Work',
        description: 'The technology behind web-based calculators.',
        render: () => renderArticle('How Online Calculators Work', `
            <p>Online calculators are powerful web applications that run complex algorithms directly in your browser.</p>
            <h2>How does it work?</h2>
            <ol>
                <li><strong>UI</strong>: You enter data into HTML forms.</li>
                <li><strong>Logic Engine</strong>: JavaScript reads your inputs and applies the formula.</li>
                <li><strong>DOM Manipulation</strong>: The result is inserted back into the page instantly.</li>
            </ol>
            <h2>Internal Links</h2>
            <ul>
                <li><a href="#/general">General Calculators Hub</a></li>
                <li><a href="#/math/graphing">Graphing Tool</a></li>
            </ul>
        `)
    },
    '/general/history': {
        title: 'Calculator History',
        description: 'From Abacus to iPhone.',
        render: () => renderArticle('Calculator History', `
            <p>The history of the calculator is the history of computing itself. It began with the Abacus (c. 2500 BC).</p>
            <h2>Timeline</h2>
            <ul>
                <li><strong>1642</strong>: Blaise Pascal invented the Pascaline.</li>
                <li><strong>1961</strong>: The ANITA became the first all-electronic desktop calculator.</li>
                <li><strong>1970s</strong>: Pocket calculators became affordable.</li>
            </ul>
            <h2>Internal Links</h2>
            <ul>
                <li><a href="#/general">General Calculators Hub</a></li>
                <li><a href="#/general/types-of-calculators">Types of Calculators</a></li>
            </ul>
        `)
    },

    // --- MATH PAGES ---
    '/math/percentage': {
        title: 'Percentage Calculator',
        description: 'Calculate percentages, increases, and decreases.',
        render: () => renderPage('Percentage Calculator', 'percentages, math, discount', `
            <p>Percentages are everywhere—from sales discounts to interest rates. A percentage calculator helps you solve finding a percentage of a number, finding what percentage one number is of another, and calculating percentage change.</p>
            <h2>Formula</h2>
            <ul>
                <li><strong>X% of Y</strong>: (X / 100) * Y</li>
                <li><strong>X is what % of Y</strong>: (X / Y) * 100</li>
                <li><strong>Percentage Change</strong>: ((Y - X) / X) * 100</li>
            </ul>
            <h2>How to use</h2>
            <ol>
                <li>Select the type of calculation.</li>
                <li>Enter your numbers in X and Y.</li>
                <li>Click Calculate.</li>
            </ol>
        `, `<div id="calc-percentage"></div>`, ['#/finance/emi', '#/math/gpa'])
    },
    '/math/quadratic': {
        title: 'Quadratic Equation Solver',
        description: 'Solve quadratic equations and find roots.',
        render: () => renderPage('Quadratic Equation Solver', 'algebra, quadratic, roots', `
            <p>A quadratic equation is a polynomial equation of degree 2, usually written as ax² + bx + c = 0. This tool finds the roots, vertex, and discriminant.</p>
            <h2>Formula</h2>
            <p>x = (-b ± √(b² - 4ac)) / 2a</p>
            <h2>How to use</h2>
            <ol>
                <li>Enter coefficients a, b, and c.</li>
                <li>Click Solve.</li>
            </ol>
        `, `<div id="calc-quadratic"></div>`, ['#/math/derivative', '#/math/graphing'])
    },
    '/math/gpa': {
        title: 'GPA Calculator',
        description: 'Calculate your Grade Point Average.',
        render: () => renderPage('GPA Calculator', 'education, grades, college', `
            <p>Your Grade Point Average (GPA) summarizes your academic performance. It is a weighted average of the grades you earn.</p>
            <h2>Formula</h2>
            <p>GPA = (Sum of (Grade Points × Credits)) / (Total Credits)</p>
            <h2>How to use</h2>
            <ol>
                <li>Add rows for your courses.</li>
                <li>Enter credits and select grades.</li>
                <li>Click Calculate.</li>
            </ol>
        `, `<div id="calc-gpa"></div>`, ['#/math/percentage', '#/general'])
    },
    '/math/derivative': {
        title: 'Equation Solver & Derivative',
        description: 'Find roots and calculate derivatives.',
        render: () => renderPage('Equation Solver & Derivative', 'calculus, algebra, roots', `
            <p>Find the roots of a function or calculate the slope (derivative) at a specific point using numeric methods.</p>
            <h2>How to use</h2>
            <ol>
                <li>Enter your function (e.g., x*x).</li>
                <li>Enter the point x.</li>
                <li>Click Calculate.</li>
            </ol>
        `, `<div id="calc-derivative"></div>`, ['#/math/graphing', '#/math/quadratic'])
    },
    '/math/graphing': {
        title: 'Graphing Tool',
        description: 'Visualize functions.',
        render: () => renderPage('Graphing Tool', 'graph, plot, function', `
            <p>Visualize mathematical functions on a coordinate plane. Enter a function of x to see its graph.</p>
            <h2>How to use</h2>
            <ol>
                <li>Enter a function of x (e.g., Math.sin(x)).</li>
                <li>Click Plot.</li>
            </ol>
        `, `<div id="calc-graphing"></div>`, ['#/math/derivative', '#/math/quadratic'])
    },
    '/math/matrix': {
        title: 'Matrix Calculator',
        description: 'Solve linear algebra problems.',
        render: () => renderArticle('Matrix Calculator', `
            <p>Matrices are grids of numbers used to solve systems of linear equations. This calculator (coming soon) will help you perform matrix operations.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/math">Math Calculators Hub</a></li></ul>
        `)
    },
    '/math/statistics': {
        title: 'Statistics Calculator',
        description: 'Calculate Mean, Median, Mode.',
        render: () => renderArticle('Statistics Calculator', `
            <p>Statistics is the science of collecting and analyzing data. This tool (coming soon) will calculate mean, median, and mode.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/math">Math Calculators Hub</a></li></ul>
        `)
    },

    // --- FINANCE PAGES ---
    '/finance/emi': {
        title: 'EMI Calculator',
        description: 'Calculate loan EMI.',
        render: () => renderPage('EMI Calculator', 'loan, finance, interest', `
            <p>EMI (Equated Monthly Installment) is the fixed payment made to a lender. Use this tool to plan your loan repayment.</p>
            <h2>Formula</h2>
            <p>E = P * r * (1 + r)^n / ((1 + r)^n - 1)</p>
            <h2>How to use</h2>
            <ol>
                <li>Enter Loan Amount, Rate, and Tenure.</li>
                <li>Click Calculate.</li>
            </ol>
        `, `<div id="calc-emi"></div>`, ['#/finance/mortgage', '#/finance/compound-interest'])
    },
    '/finance/mortgage': {
        title: 'Mortgage Calculator',
        description: 'Estimate mortgage payments.',
        render: () => renderPage('Mortgage Calculator', 'real estate, home loan', `
            <p>Estimate your monthly mortgage payment, including principal, interest, taxes, and insurance.</p>
            <h2>How to use</h2>
            <ol>
                <li>Enter Home Price and Down Payment.</li>
                <li>Enter Rate, Term, and Tax.</li>
                <li>Click Calculate.</li>
            </ol>
        `, `<div id="calc-mortgage"></div>`, ['#/finance/emi', '#/finance/compound-interest'])
    },
    '/finance/compound-interest': {
        title: 'Compound Interest Calculator',
        description: 'Calculate investment growth.',
        render: () => renderPage('Compound Interest Calculator', 'investing, savings', `
            <p>Compound interest is "interest on interest." It allows small investments to grow into fortunes over time.</p>
            <h2>Formula</h2>
            <p>A = P(1 + r/n)^(nt)</p>
            <h2>How to use</h2>
            <ol>
                <li>Enter Principal and Monthly Contribution.</li>
                <li>Enter Rate and Years.</li>
                <li>Click Calculate.</li>
            </ol>
        `, `<div id="calc-compound"></div>`, ['#/finance/emi', '#/math/percentage'])
    },
    '/finance/loan': {
        title: 'Loan Calculator',
        description: 'Calculate monthly payments for any loan.',
        render: () => renderArticle('Loan Calculator', `
            <p>A general loan calculator for personal or auto loans. (Use the EMI calculator for now).</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/finance/emi">EMI Calculator</a></li></ul>
        `)
    },
    '/finance/tax': {
        title: 'Tax Calculator',
        description: 'Estimate sales and income tax.',
        render: () => renderArticle('Tax Calculator', `
            <p>Estimate your tax liability. (Tool coming soon).</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/finance">Finance Hub</a></li></ul>
        `)
    },
    '/finance/roi': {
        title: 'ROI Calculator',
        description: 'Calculate Return on Investment.',
        render: () => renderArticle('ROI Calculator', `
            <p>ROI measures the profitability of an investment. Formula: ((Gain - Cost) / Cost) * 100.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/finance">Finance Hub</a></li></ul>
        `)
    },
    '/finance/inflation': {
        title: 'Inflation Calculator',
        description: 'Calculate value of money over time.',
        render: () => renderArticle('Inflation Calculator', `
            <p>See how inflation erodes purchasing power. (Tool coming soon).</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/finance">Finance Hub</a></li></ul>
        `)
    },
    '/finance/salary-to-hourly': {
        title: 'Salary to Hourly Calculator',
        description: 'Convert annual salary to hourly wage.',
        render: () => renderArticle('Salary to Hourly Calculator', `
            <p>Convert your annual salary to an hourly rate. Standard year = 2080 hours.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/finance">Finance Hub</a></li></ul>
        `)
    },

    // --- HEALTH PAGES ---
    '/health/bmi': {
        title: 'BMI Calculator',
        description: 'Calculate Body Mass Index.',
        render: () => renderPage('BMI Calculator', 'health, weight, fitness', `
            <p>Body Mass Index (BMI) is a simple index of weight-for-height used to classify underweight, overweight and obesity.</p>
            <h2>Formula</h2>
            <p>BMI = Weight (kg) / (Height (m))^2</p>
            <h2>How to use</h2>
            <ol>
                <li>Enter weight and height.</li>
                <li>Click Calculate.</li>
            </ol>
        `, `<div id="calc-bmi"></div>`, ['#/health/calorie', '#/general'])
    },
    '/health/calorie': {
        title: 'Calorie Calculator',
        description: 'Calculate daily calorie needs.',
        render: () => renderPage('Calorie Calculator', 'diet, nutrition, energy', `
            <p>Knowing your daily calorie needs is essential for weight management. This tool uses the Mifflin-St Jeor equation.</p>
            <h2>How to use</h2>
            <ol>
                <li>Enter age, gender, height, weight.</li>
                <li>Select activity level.</li>
                <li>Click Calculate.</li>
            </ol>
        `, `<div id="calc-calorie"></div>`, ['#/health/bmi', '#/math/percentage'])
    },
    '/health/bmr': {
        title: 'BMR Calculator',
        description: 'Calculate Basal Metabolic Rate.',
        render: () => renderArticle('BMR Calculator', `
            <p>Your BMR is the number of calories your body burns at rest. (Use the Calorie Calculator for this).</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/health/calorie">Calorie Calculator</a></li></ul>
        `)
    },
    '/health/pregnancy': {
        title: 'Pregnancy Due Date Calculator',
        description: 'Estimate your due date.',
        render: () => renderArticle('Pregnancy Due Date Calculator', `
            <p>Estimate your baby's arrival date using Naegele's Rule: LMP + 7 days - 3 months + 1 year.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/health">Health Hub</a></li></ul>
        `)
    },
    '/health/deficit-guide': {
        title: 'Calorie Deficit Guide',
        description: 'The science of weight loss.',
        render: () => renderArticle('Calorie Deficit Guide', `
            <p>A calorie deficit occurs when you burn more calories than you consume. It is the fundamental requirement for weight loss.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/health/calorie">Calorie Calculator</a></li></ul>
        `)
    },

    // --- REVIEWS PAGES ---
    '/reviews/best-scientific-calculators': {
        title: 'Best Scientific Calculators',
        description: 'Top picks for students.',
        render: () => renderArticle('Best Scientific Calculators', `
            <p>Choosing the right calculator can make the difference in math class. Top picks include TI-30XS and Casio fx-115ES.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/reviews">Reviews Hub</a></li></ul>
        `)
    },
    '/reviews/best-graphing-calculators': {
        title: 'Best Graphing Calculators',
        description: 'Visualizing math.',
        render: () => renderArticle('Best Graphing Calculators', `
            <p>For Calculus and Engineering, you need a graphing calculator. Top picks: TI-84 Plus CE and Casio fx-CG50.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/reviews">Reviews Hub</a></li></ul>
        `)
    },
    '/reviews/best-calculator-apps': {
        title: 'Best Calculator Apps',
        description: 'Math in your pocket.',
        render: () => renderArticle('Best Calculator Apps', `
            <p>Top apps include Desmos (graphing), Photomath (step-by-step), and WolframAlpha.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/reviews">Reviews Hub</a></li></ul>
        `)
    },
    '/reviews/casio-vs-ti': {
        title: 'Casio vs Texas Instruments',
        description: 'The Calculator Wars.',
        render: () => renderArticle('Casio vs Texas Instruments', `
            <p>TI is the standard in US schools, while Casio offers better value. Both make excellent devices.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/reviews">Reviews Hub</a></li></ul>
        `)
    },
    '/reviews/best-budget-calculators': {
        title: 'Best Budget Calculators',
        description: 'Cheap & Powerful.',
        render: () => renderArticle('Best Budget Calculators', `
            <p>You don't need to spend $100. The Casio fx-300ES and TI-30Xa are great options under $20.</p>
            <h2>Internal Links</h2>
            <ul><li><a href="#/reviews">Reviews Hub</a></li></ul>
        `)
    }
};

// --- RENDER HELPERS ---
function renderHub(title, intro, links) {
    const linkList = links.map(l => `<li><a href="${l.link}">${l.title}</a></li>`).join('');
    return `
        <h1>${title}</h1>
        <p class="lead">${intro}</p>
        <div class="card mt-lg">
            <h3>Available Tools & Articles</h3>
            <ul style="padding-left: 1.5rem; margin-top: 1rem;">${linkList}</ul>
        </div>
    `;
}

function renderArticle(title, contentHtml) {
    return `
        <article>
            <header>
                <h1>${title}</h1>
            </header>
            <section class="mt-lg">
                ${contentHtml}
            </section>
            <nav class="flex" style="justify-content: space-between; margin-top: 3rem; border-top: 1px solid var(--color-border); padding-top: 1rem;">
                <button onclick="window.history.back()" class="btn btn-outline">← Back</button>
                <a href="#/" class="btn btn-outline">Home →</a>
            </nav>
        </article>
    `;
}

function renderPage(title, keywords, introHtml, widgetHtml, relatedLinks) {
    const relatedHtml = relatedLinks.map(link => {
        const routeKey = link.replace('#', '');
        const route = routes[routeKey] || { title: 'Related Tool' };
        const cleanTitle = route.title.split('-')[0].trim();
        return `<a href="${link}" class="btn btn-outline">${cleanTitle}</a>`;
    }).join(' ');

    return `
        <article>
            <header>
                <h1>${title}</h1>
                <p class="text-small">Keywords: ${keywords}</p>
            </header>
            <section class="mt-lg">
                ${introHtml}
            </section>
            
            <section class="calculator-widget">
                ${widgetHtml}
            </section>

            <section class="mt-lg">
                <h3>Related Tools & Guides</h3>
                <div class="flex" style="flex-wrap: wrap; margin-top: 1rem;">
                    ${relatedHtml}
                </div>
            </section>

            <nav class="flex" style="justify-content: space-between; margin-top: 3rem; border-top: 1px solid var(--color-border); padding-top: 1rem;">
                <button onclick="window.history.back()" class="btn btn-outline">← Back</button>
                <a href="#/" class="btn btn-outline">Home →</a>
            </nav>
        </article>
    `;
}

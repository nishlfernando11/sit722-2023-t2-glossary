//create a list
const glossaryList = [{
        id: 1,
        term: "'shift-left' modification",
        description: "This is term in Software Development process where it focuses on a set of practices in software development life cycle to react fast for changes and operate in parallel in contrast to traditional sequential process which is less efficient.",
        references: "A. Ramanathan, “Shift Left Testing in Microservices Environments,” DevOps.com, Dec. 13, 2022. https://devops.com/shift-left-testing-in-microservices-environments/#:~:text=Shift%20left%20is%20a%20set (accessed Jul. 20, 2023)."
    },
    {
        id: 2,
        term: 'Silos',
        description: 'This is a term in DevOps where teams are isolated or structured into different groups in organizational hierarchy by the type of work and responsibilities where the interaction between the groups are minimal and less productive. For example: Development team is a silo, Operations team is another silo.',
        references: "M. Mazyar, “DevOps: The Ultimate Way to Break Down Silos,” DevOps.com, Dec. 18, 2018. https://devops.com/devops-the-ultimate-way-to-break-down-silos/ (accessed Jul. 20, 2023)."
    },
    {
        id: 3,
        term: 'Agile Manifesto',
        description: "This is a term in Software Development which defines a set of rules and principles that developers should practice while following an agile development mindset. In this manifesto there are 4 values and 12 principles defined by the authors of the manifesto.",
        references: `Agile Manifesto, “Manifesto for Agile Software Development,” Agilemanifesto.org, 2001. https://agilemanifesto.org/ (accessed Jul. 20, 2023).` + "\n\n" +
            `Agile Alliance, “Agile Manifesto for Software Development,” Agile Alliance, Dec. 12, 2018. https://www.agilealliance.org/agile101/the-agile-manifesto/ (accessed Jul. 20, 2023).`
    },
    {
        id: 4,
        term: 'Heroku',
        description: "This is a cloud service used in development for developers to develop their applications without needing to build the underlying infrastructure or platform manually. Instead, this offers an entire platform with readily built development supporting a set of programming languages and deployment platform with the flexibility to customize. In software terms this is categorized as Platform-as-a-service (PaaS).",
        references: `Heroku, “Cloud Application Platform | Heroku,” Heroku.com, Jan. 25, 2020. https://www.heroku.com/ (accessed Jul. 20, 2023).` + "\n\n" + `G. Nokes, “Heroku Explained Icebergs, Lumberjacks, and Condos,” www.youtube.com, Oct. 28, 2021. https://youtu.be/VrhW9NXfKmg (accessed Jul. 20, 2023).`
    },
    {
        id: 5,
        term: 'Single Responsibility Principle',
        description: "This is one of the principles defined in Object-Oriented Design in which it states that a class should always have one single task or responsibility and that is the only reason for it to change.",
        references: `S. Oloruntoba, “SOLID: The First 5 Principles of Object Oriented Design | DigitalOcean,” www.digitalocean.com, Sep. 21, 2020. https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design (accessed Jul. 20, 2023).`
    },
    {
        id: 6,
        term: 'Cluster Orchestration',
        description: "This is a heavily used term in DevOps in which the orchestration refers to automated management and work scheduling of containers in a cluster or multiple clusters. This is based on microservice architecture where related applications are deployed as containers of microservices sharing resources. Thus, this requires a process to manage and allocate work among containers based on the runtime circumstances (ex: high availability). Orchestration facilitates all such control features and automation on containers and clusters of containers.",
        references: "“What Is Container Orchestration?,” Splunk, Sep. 09, 2022. https://www.splunk.com/en_us/data-insider/container-orchestration.html (accessed Jul. 20, 2023)."
    },
    {
        id: 7,
        term: 'Express Boilerplate',
        description: "Boilerplate is a basic starter project or project template that can be used to build more complex applications. Express boilerplate is the project template that can be used to build a functional Node express server",
        references: "H. Jamkojian, “RESTful API Node Server Boilerplate,” GitHub, Jun. 23, 2023. https://github.com/hagopj13/node-express-boilerplate (accessed Jul. 20, 2023)."
    },
    {
        id: 8,
        term: 'Wait-port npm Package',
        description: 'This is a npm (Node Package Manager) library or a package used in node applications where the application in use waits for a predefined server or port to be available before running.',
        references: `D. Kerr, “wait-port,” npm, Oct. 18, 2022. https://www.npmjs.com/package/wait-port (accessed Jul. 20, 2023).`
    },
    {
        id: 9,
        term: 'Technical Debt',
        description: "This is a term in software development process where the amount of work due or piled up (or compromised) in return of fast delivery or fixing immediate issues. For example: code maintainability/ quality of code is often compromised when fulfilling urgent feature requirement of the business.",
        references: "P. Kruchten, R. Nord, and I. Ozkaya, Managing Technical Debt. in SEI Series in Software Engineering. Pearson Education, 2019. [Online]. Available: https://books.google.com.au/books?id=R3qSDwAAQBAJ"
    },
    {
        id: 10,
        term: "COTS (commercial off-the-shelf Software)",
        description: "This is a general category of software or hardware products available for purchase or periodic subscriptions for a mass audience. These often provide a set of utility required targeting a specific context and not limited to DevOps context. Examples include operating systems, Document processors.",
        references: `C. C. Editor, “commercial-off-the-shelf (COTS) - Glossary | CSRC,” csrc.nist.gov. https://csrc.nist.gov/glossary/term/commercial_off_the_shelf#:~:text=Definition(s)%3A (accessed Jul. 20, 2023).` + "\n\n" + `“COTS-Based System - What Is It And What Are The Benefits,” www.fabricgroup.com.au, Feb. 24, 2021. https://www.fabricgroup.com.au/blog/cots-based-system-what-is-it-and-what-are-the-benefits (accessed Jul. 20, 2023).`
    },
    {
        id: 11,
        term: "Domain Driven Design (DDD)",
        description: "This is a software development approach that bases software development based on the expertise of a particular business domain. The logic and business principles form a domain model that software development should strictly follow.",
        references: `M. Fowler, “bliki: DomainDrivenDesign,” martinfowler.com, Apr. 22, 2020. https://martinfowler.com/bliki/DomainDrivenDesign.html (accessed Jul. 31, 2023).`
    },
    {
        id: 12,
        term: "Distributed Applications",
        description: "Applications or servers that run on separate machines that are connected to a network to communicate and operate for business tasks. This is commonly used in telecommunications and network applications that span customers around a larger region.",
        references: `“What Is a Distributed Application,” docs.oracle.com, 2010. https://docs.oracle.com/cd/E13203_01/tuxedo/tux71/html/addist2.htm (accessed Jul. 31, 2023).`
    },
    {
        id: 13,
        term: "Kubernetes",
        description: "This is an open-source platform to manage or orchestrate containerized software services with configuration and automation support. This is widely used on containerized or microservices-based application, ",
        references: `The Kubernetes Authors, “Overview,” Kubernetes.io, Jan. 03, 2023. https://kubernetes.io/docs/concepts/overview/ (accessed Jul. 31, 2023).`
    },
    {
        id: 14,
        term: "Gherkins",
        description: "This is a programming language or a domain-specific language that is readable for anyone, therefore business teams can easily specify product requirements or behaviors expected from the application. This is used to define tests in Cucumber, an automation tool used in specific development context.",
        references: `“What is Gherkin,” www.lambdatest.com. https://www.lambdatest.com/software-testing-questions/what-is-gherkin (accessed Aug. 02, 2023).`
    },
    {
        id: 15,
        term: "Docker Compose",
        description: "This is a tool provided by docker to define container specification for a set of services or applications that work cohesively in a single project. The created file name is docker-compose.yaml which contains all definitions regarding the service creation and stopping.",
        references: `Docker Docs, “Use Docker Compose,” Docker Documentation, May 12, 2022. https://docs.docker.com/get-started/08_using_compose/#:~:text=Docker%20Compose%20is%20a%20tool (accessed Jul. 31, 2023).`
    },
    {
        id: 16,
        term: "Behavior-Driven Design (BDD)",
        description: "This is a development approach where development activities are based on behaviors or interactions of users with the application. This is closely associated with the Agile process as this involves collaboration among developers and product teams to develop the behaviors.",
        references: `E. Elliott, “Behavior Driven Development (BDD) and Functional Testing,” Medium, Nov. 10, 2019. https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2 (accessed Aug. 02, 2023).`
    },
    {
        id: 17,
        term: "DevSecOps",
        description: "This is an enhanced software development culture where security is automated and integrated into the process from initiation to software delivery. As security is becoming crucial for modern applications, by extending DevOps with security in between it accelerates the resolution of security issues rather than performing security at the last stage of software delivery.",
        references: `“What is DevSecOps? | IBM,” www.ibm.com, Apr. 2022. https://www.ibm.com/topics/devsecops (accessed Aug. 02, 2023).`
    },
    {
        id: 18,
        term: "AIOps",
        description: "This is a practice of integrating Artificial Intelligence (AI) features into operations to enhance and automate operational procedures that can be automated. AI-related mechanisms such as Machine Learning/analytics and natural language processing are used to process big data and discover and resolve issues proactively which can be time consuming for human operators.",
        references: `“What is AIOps? | IBM,” www.ibm.com, Apr. 2022. https://www.ibm.com/topics/aiops (accessed Aug. 02, 2023).`
    },
    {
        id: 19,
        term: "Cypress",
        description: "This is a testing tool for front-end applications that run on web browsers. This operates directly on the modern browser, thereby making the testing process convenient for developer and testers. This is written in pure JavaScript and offers more advanced features for test automation solving issues in traditional front-end testing tools.",
        references: `A. Khetarpal, “What is Cypress? Cypress Architecture, Features and Introduction,” TOOLSQA, Apr. 04, 2020. https://www.toolsqa.com/cypress/what-is-cypress/ (accessed Aug. 03, 2023).`
    },
    {
        id: 20,
        term: "Infrastructure as Code (IaC)",
        description: "This is a specification for defining infrastructure configuration for deployment environment as a code in which the deployment environment can be easily configured and automated in contrast to manual configuration of error-prone inconsistent environments. This lays a unified mechanism for DevOps to define and maintain and deploy infrastructure.",
        references: `M. Jacobs, J. Kulla-Mader, T. Petersen, and E. Kaim, “What is infrastructure as code (IaC)? - Azure DevOps,” learn.microsoft.com, Nov. 29, 2022. https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code (accessed Aug. 02, 2023).` + "\n\n" + `I. Buchanan, “Infrastructure as Code (IaC),” Atlassian. https://www.atlassian.com/microservices/cloud-computing/infrastructure-as-code (accessed Aug. 02, 2023).`
    },
];

module.exports = glossaryList;
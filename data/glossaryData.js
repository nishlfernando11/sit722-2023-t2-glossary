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
    {
        id: 21,
        term: "Provisioning (infrastructure)",
        description: "This is a procedure that involves the creation or setting up of Information Technology systems to prepare them for a usable state by software applications. Provisioning can be done either on physical or virtual resources and there exist several types of provisioning such as cloud, server, service, and network.",
        references: `“What is provisioning?,” www.redhat.com, Mar. 03, 2023. https://www.redhat.com/en/topics/automation/what-is-provisioning (accessed Aug. 12, 2023).`
    },
    {
        id: 22,
        term: "Hypervisor (VM)",
        description: "This is software that isolates and enables the running of multiple operating systems by sharing underlying physical resources such as CPU, memory, and storage. Hypervisor is also referred to as Virtual Machine Monitor as this is used to run multiple virtual machines using virtualization.",
        references: `IBM Cloud Team, “Hypervisors | IBM,” www.ibm.com. https://www.ibm.com/topics/hypervisors (accessed Aug. 12, 2023).` + "\n\n" + `“What is a hypervisor?,” www.redhat.com, Jan. 03, 2023. https://www.redhat.com/en/topics/virtualization/what-is-a-hypervisor (accessed Aug. 12, 2023).`
    },
    {
        id: 23,
        term: "Kernel (Operating System)",
        description: "The kernel is the core part of an operating system that acts as an interface between computer hardware and processes managing, coordinating, and monitoring the hardware (ex: CPU, memory) usage by applications/processes.",
        references: `Baeldung, “What is an OS Kernel? | Baeldung on Computer Science,” www.baeldung.com, May 03, 2021. https://www.baeldung.com/cs/os-kernel (accessed Aug. 12, 2023). `
    },
    {
        id: 24,
        term: "nginx",
        description: "This is an open-source software providing web serving capabilities with different protocols such as HTTP, and HTTPS. Load balancing, caching, and acting as a proxy server for emails are among the core features in addition. This has asynchronous, event-driven architecture which is ideal to host application servers.",
        references: `J. Magaji, “What is Nginx: Everything You Need to Know,” Papertrail. https://www.papertrail.com/solution/guides/nginx/ (accessed Aug. 12, 2023).` + "\n\n" + `Nginx, “What is NGINX?,” NGINX. https://www.nginx.com/resources/glossary/nginx/ (accessed Aug. 12, 2023).`
    },
    {
        id: 25,
        term: "Alphine OS",
        description: "This is a minimalistic version or a specific distribution of the Linux operating system with security features for use in servers, containers, routers, firewalls etc. This is widely used in containers due to its lightweight and fundamental features.",
        references: `Wikipedia contributors, “Alpine Linux,” Wikipedia, Jan. 23, 2022. https://en.wikipedia.org/wiki/Alpine_Linux (accessed Aug. 12, 2023).`
    },
    {
        id: 26,
        term: "Cloud-Native",
        description: "This is an approach of building and deploying software applications using cloud computing or in cloud environments absorbing the modern software development features available on cloud such as scalability, flexibility, and elasticity compared to traditional on-premises applications.",
        references: `AWS, “What is Cloud Native? - Cloud Native Explained - AWS,” Amazon Web Services, Inc. https://aws.amazon.com/what-is/cloud-native/ (accessed Aug. 12, 2023).`
    },
    {
        id: 27,
        term: "Azure Resource Group",
        description: "This indicates a logical grouping of related resources in Azure such as services, storage, and virtual machines for easy and automated provisioning, management, and monitoring.",
        references: `“How to use Azure Resource Groups | Azure Resource Manager Guide,” OTAVA. https://www.otava.com/reference/how-to-use-azure-resource-groups-a-simple-explanation/ (accessed Aug. 12, 2023).`
    },
    {
        id: 28,
        term: "Vagrant",
        description: "This is a tool for creating and managing virtual machines using a configuration file called a vagrant file that enables automation of this creation process. This automation reduces the development setup time and increases the development environment consistency between developers.",
        references: `“Introduction | Vagrant | HashiCorp Developer,” Introduction | Vagrant | HashiCorp Developer, Jan. 20, 2022. https://developer.hashicorp.com/vagrant/intro (accessed Aug. 12, 2023).` + "\n\n" + `samandal2021, “What is Vagrant?,” GeeksforGeeks, Jun. 04, 2021. https://www.geeksforgeeks.org/what-is-vagrant/ (accessed Aug. 12, 2023). `
    },
    {
        id: 29,
        term: "SDK",
        description: "SDK stands for Software Development Kit which is a collection of software development tools for developing software applications targeted for a specific platform. SDK usually includes compilers, libraries, testing, documentation and debugging support tools.",
        references: `I. C. Education, “SDK vs. API: What’s the Difference?,” IBM Blog, Jul. 13, 2021. https://www.ibm.com/blog/sdk-vs-api/ (accessed Aug. 12, 2023).`
    },
    {
        id: 30,
        term: "BLOB/ blob",
        description: "The term BLOB stands for Binary large object which is a data type for storing binary data coming from multimedia such as images, audio, videos, documents, or other file types. Modern databases support blob data type which is comparatively complex than other database data types.",
        references: `A. Zanini, “BLOB Data Type: Everything You Can Do With It,” www.dbvis.com, Mar. 13, 2023. https://www.dbvis.com/thetable/blob-data-type-everything-you-can-do-with-it/ (accessed Aug. 12, 2023).`
    },
    {
        id: 31,
        term: "Docker Volumes",
        description: "Docker volume is a special kind of file system managed by docker to persist data even when a container is not running. This storage resides in the host file system shared by docker at runtime. This way data used in containers can continue to exist even in the absence of the container.",
        references: `Docker, “Use volumes,” Docker Documentation, Jan. 04, 2019. https://docs.docker.com/storage/volumes/ (accessed Aug. 31, 2023).` + "\n\n" +
        `S. Zivuku, “Understanding Docker Volumes,” Earthly Blog, Feb. 08, 2022. https://earthly.dev/blog/docker-volumes/ (accessed Aug. 31, 2023).`
    },
    {
        id: 32,
        term: "Nodemon",
        description: "Nodemon is a development tool used to monitor code changes and automatically restart or reload applications. This avoids the repetitive and manual restart of application after every code change. Additionally, it provides support to avoid, or especially monitor certain files. Primarily developed for node, however it supports other languages such as Python, Ruby. ",
        references: `R. Sharp, “nodemon,” nodemon.io. https://nodemon.io/ (accessed Aug. 31, 2023).`
    },
    {
        id: 33,
        term: "MacVLAN",
        description: "MacVLAN is a network driver which is used in containers when they need to appear in network as physical device. In this case, with MacVLAN network driver, container’s network interface is directly connected to host’s network interface with as MAC/physical address assigned.",
        references: `R. Bhardwaj, “What is MacVLAN? Detailed Expalnation - IP With Ease,” ipwithease.com, Sep. 20, 2021. https://ipwithease.com/what-is-macvlan/ (accessed Aug. 31, 2023).`
    },
    {
        id: 34,
        term: "amqplib",
        description: "AMQP lib (Advanced message queueing protocol) is a library that implements clients required for operating message transfer using AMQP. Message brokers such as RabbitMQ can use this library to connect to clients in applications.",
        references: `M. Bridgen, “amqplib | AMQP 0-9-1 library and client for Node.JS,” amqp-node.github.io, 2014. https://amqp-node.github.io/amqplib/ (accessed Aug. 31, 2023).`
    },
    {
        id: 35,
        term: "Stub",
        description: "Stub is a temporary or abstract version of a specific functionality that is yet to be developed. In testing, stubs are used to represent a certain block of code without fully implementing details which supports unit testing by removing underlying third-party complex code.",
        references: `t2informatik, “What is a Stub? - Smartpedia - t2informatik,” t2informatik, Aug. 02, 2019. https://t2informatik.de/en/smartpedia/stub/ (accessed Aug. 31, 2023).`
    },
    {
        id: 36,
        term: "Robo3T",
        description: "This is a data visualization application or tool for MongoDB that facilitates database connection to a database, data exploration through an interface as well as Command Line Interface (CLI).",
        references: `ScaleGrid, “MongoDB GUI - Robo 3T Connection,” ScaleGrid Console, 2023. https://help.scalegrid.io/docs/mongodb-connections-gui-robo-3t (accessed Aug. 31, 2023).`
    },
    {
        id: 37,
        term: "RabbitMQ Exchange",
        description: "Entity that supposed to route the message to the correct queue RabbitMQ message broker or message service has special types of entity that is used to route messages to certain message queues. This implements several exchange mechanisms such as direct, fanout, topic exchange.",
        references: `L. Johansson, “Part 4: RabbitMQ Exchanges, routing keys and bindings - CloudAMQP,” www.cloudamqp.com, Sep. 24, 2019. https://www.cloudamqp.com/blog/part4-rabbitmq-for-beginners-exchanges-routing-keys-bindings.html (accessed Aug. 31, 2023).`
    },
    {
        id: 38,
        term: "Minikuse",
        description: "Minikuses is a simple lightweight implementation of Kubernetes for use in local machines as Kubernetes configurations are often unsatisfiable to be used in local machines. This allows to implement a simple single node cluster with basic functionality replicating light functionality of Kubernetes.",
        references: ``
    },
    {
        id: 39,
        term: "Kubectl",
        description: "Kubernetes provides an API based command line utility to control and manage Kubernetes clusters, resources and other services provided. Kubectl commands will execute respective API in Kubernetes to perform that action on Kubernetes.",
        references: `S. biradar, “What is kubectl?,” dockerlabs. https://dockerlabs.collabnix.com/kubernetes/beginners/what-is-kubect.html (accessed Aug. 31, 2023).`
    },
    {
        id: 40,
        term: "SKU",
        description: "Microsoft Azure specifies, Stock Keeping Unit (SKU) for the resources it offers. SKU specifies different offerings and features of the same service based on cost, set of features, security levels, and performance levels. This provides the flexibility to choose resources/services based on the required need. It is similar to Basic, Standard, Premium like features available.",
        references: `H. Manoj, “What Is Sku In Azure,” SkillVertex, Aug. 29, 2023. https://www.skillvertex.com/blog/what-is-sku-in-azure/ (accessed Aug. 31, 2023).`
    },
];

module.exports = glossaryList;
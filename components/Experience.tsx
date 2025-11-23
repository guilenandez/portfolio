"use client";

import { useState } from 'react';

interface Job {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const jobs: Job[] = [
    {
      company: 'Walmart Global Tech',
      title: 'Senior Software Engineer',
      duration: '2022.07 - 2025.06',
      responsibilities: [
        'Created Payment Processing Platform with technologies including React, Python, C#, Node.js, Express.js, with AWS Cloud',
        'Worked on Web/Mobile Banking Software for a Bank with React.js, React Native, Node.js, Express.js, Nest.js and .Net',
        'Hibernate Developed and utilized microservices, PostgreSQL, Elasticsearch, GraphQL, for multiple projects',
        'Tuned performance for a React/Node.js application and analyzed performance on slow sections of the UI and tuned database queries',
        'Implemented robust error handling to manage API request failures and rate limits'
      ],
    },
    {
      company: 'Infuse',
      title: 'Software Engineer',
      duration: '2020.05 - 2022.01',
      responsibilities: [
        'Developed backend of internal web applications, and services with  Python, Node, C# and Azure Cloud Family',
        'Built KPI dashboard applications using TypeScript, React, Next.js, Python, MongoDB, utilized Azure Cloud family',
        'Refactored the NodeJS codebase to Python or C#, enhanced functionalities, and optimized performance',
        'Worked with CI/CD pipelines using Azure DevOps, Docker, Jenkins, Kubernetes, Terraform, and with automated testing',
        'Led regular code reviews in GitHub, providing constructive feedback to team members'
      ],
    },
    {
      company: 'Dotsquares',
      title: 'Backend Engineer',
      duration: '2017.09 - 2020.03',
      responsibilities: [
        'Developed AI/ML based Healthcare platforms using Node.js, Python, C#, .Net and utilized AWS services',
        'Built a digital customer management platform for all types of financial institutions, with Python, Django, Kafka, MongoDB, PostgreSQL, C#, .Net',
        'Integrated AWS services including API Gateway, S3, and SQS with Lambda functions for event driven architectures ',
        'Fully engaged in Agile SDLC, using Jira and Confluence for project management and documentation Conducted Unit ',
        'Testing, E2E Testing utilizing Selenium, JUnit, Cypress, React Testing Library'
      ],
    },
  ];

  const tabHeight = 42;

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4" data-testid="heading-experience">
          <span className="text-primary font-mono text-2xl">02.</span>
          <span className="text-foreground">Work Experience</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 sm:gap-12">
          {/* Left Column: Company Navigation Tabs */}
          <div className="relative min-w-[200px]" role="tablist">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-border hidden sm:block" />
            
            <div className="flex flex-row sm:flex-col gap-0 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
              {jobs.map((job, index) => (
                <button
                  key={job.company}
                  role="tab"
                  aria-selected={activeTab === index}
                  className={`relative text-left font-mono text-sm whitespace-nowrap px-5 py-3 transition-all duration-200 ${
                    activeTab === index
                      ? 'text-primary bg-accent/30'
                      : 'text-muted-foreground hover:bg-accent/20 hover:text-primary'
                  }`}
                  onClick={() => setActiveTab(index)}
                  data-testid={`button-company-${index}`}
                >
                  {job.company}
                </button>
              ))}
            </div>
            
            <div 
              className="absolute left-0 top-0 w-24 h-0.5 sm:w-0.5 sm:h-[42px] bg-primary transition-all duration-300 ease-out hidden sm:block"
              style={{
                transform: `translateY(${activeTab * tabHeight}px)`,
              }}
            />
          </div>

          {/* Right Column: Job Details */}
          <div className="min-h-[300px]">
            <div key={activeTab} className="animate-in fade-in duration-300" data-testid={`job-content-${activeTab}`}>
              <h3 className="text-xl font-semibold text-foreground mb-1" data-testid="text-job-title">
                {jobs[activeTab].title}{' '}
                <span className="text-primary"> {jobs[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-6" data-testid="text-job-duration">
                {jobs[activeTab].duration}
              </p>
              <ul className="space-y-4">
                {jobs[activeTab].responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-3" data-testid={`responsibility-${idx}`}>
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

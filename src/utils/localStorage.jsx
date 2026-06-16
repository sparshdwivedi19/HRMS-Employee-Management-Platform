// Do not clear localStorage on module import — preserve logged-in state across reloads


const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@gmail.com",
    password: "123",

    taskCount: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 2
    },
 
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Update Website",
        taskDescription: "Update homepage banner and text",
        taskDate: "2026-05-30",
        category: "Design"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "UI Improvement",
        taskDescription: "Improve dashboard UI",
        taskDate: "2026-06-01",
        category: "Design"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login issue for users",
        taskDate: "2026-05-25",
        category: "Development"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Prepare Report",
        taskDescription: "Create monthly sales report",
        taskDate: "2026-05-20",
        category: "Management"
      }
    ]
  },

  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@gmail.com",
    password: "123",

    taskCount: {
      active: 1,
      completed: 2,
      failed: 0,
      newTask: 1
    },

    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Client Meeting",
        taskDescription: "Attend Zoom meeting with client",
        taskDate: "2026-05-31",
        category: "Meeting"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup production database",
        taskDate: "2026-05-21",
        category: "Database"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Update CRM",
        taskDescription: "Update customer records",
        taskDate: "2026-05-23",
        category: "Management"
      }
    ]
  },

  {
    id: 3,
    name: "Amit Singh",
    email: "employee3@gmail.com",
    password: "123",

    taskCount: {
      active: 3,
      completed: 1,
      failed: 1,
      newTask: 2
    },

    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare API documentation",
        taskDate: "2026-06-02",
        category: "Documentation"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Code Review",
        taskDescription: "Review frontend pull requests",
        taskDate: "2026-06-03",
        category: "Development"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Team Discussion",
        taskDescription: "Discuss sprint planning",
        taskDate: "2026-06-04",
        category: "Meeting"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix navbar responsiveness",
        taskDate: "2026-05-18",
        category: "Development"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy latest build to server",
        taskDate: "2026-05-19",
        category: "Deployment"
      }
    ]
  },

  {
    id: 4,
    name: "Sneha Kapoor",
    email: "employee4@gmail.com",
    password: "123",

    taskCount: {
      active: 1,
      completed: 1,
      failed: 2,
      newTask: 1
    },

    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO score",
        taskDate: "2026-06-05",
        category: "Marketing"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog article",
        taskDate: "2026-05-24",
        category: "Content"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Ad Campaign",
        taskDescription: "Launch Facebook ads",
        taskDate: "2026-05-23",
        category: "Marketing"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Email Marketing",
        taskDescription: "Send campaign emails",
        taskDate: "2026-05-29",
        category: "Marketing"
      }
    ]
  },

  {
    id: 5,
    name: "Karan Mehta",
    email: "employee5@gmail.com",
    password: "123",

    taskCount: {
      active: 2,
      completed: 2,
      failed: 1,
      newTask: 1
    },

    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server uptime",
        taskDate: "2026-06-04",
        category: "DevOps"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        taskTitle: "Cloud Setup",
        taskDescription: "Configure AWS services",
        taskDate: "2026-06-05",
        category: "Cloud"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Security Check",
        taskDescription: "Check app security vulnerabilities",
        taskDate: "2026-05-26",
        category: "Security"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskTitle: "Docker Setup",
        taskDescription: "Containerize application",
        taskDate: "2026-05-27",
        category: "DevOps"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskTitle: "Performance Testing",
        taskDescription: "Test website loading speed",
        taskDate: "2026-05-28",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123"
  }
];

const setLocalStorage = () => {
 
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}};

const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

export { setLocalStorage, getLocalStorage };
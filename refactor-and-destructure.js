const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

function printJobName({name, job: {name: jobName, hiringDate: jobHiringDate}}) {
    console.log(name);
}

printJobName(sarah);

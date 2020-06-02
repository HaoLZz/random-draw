const NUM_QUESTIONS = 10;
// *********************************

const records = [];
const studentsId = [];

function isIdValid(id) {
    if (!Number.isInteger(id) || id <= 0) {
        console.log("ID must be an integer and large than zero");
        return false;
    } else if (studentsId.includes(id)) {
        console.log("ID already exists!");
        return false;
    }
    return true;
}

function addStudentId(id) {
    studentsId.push(id);
}

function addRecord(record) {

    records.push(record);
}

function getRandomQuestionNum() {
    return generateRandomInteger(1, NUM_QUESTIONS);

    // ********************************************
    function generateRandomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
}

function isDifferntFromLastQuestion(qestionNum) {
    if (records.length === 0) return true;
    if (records[records.length - 1].qNum === qestionNum) return false;
    else return true;
}

function createStudentRecord(id) {
    let qNum = getRandomQuestionNum();
    while (!isDifferntFromLastQuestion(qNum)) {
        qNum = getRandomQuestionNum();
    }

    return {
        id,
        qNum
    };
}

function buttonPushed(id) {
    if (!isIdValid(id)) {
        console.log("Please input valid ID");
        return;
    }
    addStudentId(id);
    const record = createStudentRecord(id);
    addRecord(record);
    console.log(records);
}


// Testing
// buttonPushed(24);
// buttonPushed(2);
// buttonPushed(13);
// buttonPushed(55);
// buttonPushed("22");
// buttonPushed(13);
// buttonPushed(41);
const IDs = [24, 35, 34, 56, 24, 50, "11", "b", 35, 66, 43, 51, 25, 64, 14, 15, 16, 18, 12];

IDs.forEach(buttonPushed);
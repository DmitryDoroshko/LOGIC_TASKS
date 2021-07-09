function deleteDuplicatesFromArray(array = []) {
     return Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);
}


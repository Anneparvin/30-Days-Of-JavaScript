const webTechsSort = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
webTechsSort.sort()
console.log(webTechsSort);  // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechsSort.reverse() // after sorting we can reverse it
console.log(webTechsSort) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

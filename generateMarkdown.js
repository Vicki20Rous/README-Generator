
function generateMarkdown(data) {
    return `# ${data.title}

    ## Description
    ${data.Description} 
   
    ## Installation instruction
    ${data.Installation}
   
    ## Usage information
    ${data.Usage}
   
    ## License 
    ${data.License}
   
    ## Questions
    ${data.Questions}
   
     //Github
  
  `;
  }
  
  module.exports = generateMarkdown;


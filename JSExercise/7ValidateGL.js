    const validate=(GLConfig,GLSegments)=>{
    for(var key in GLConfig){
        const config = GLConfig[key]
        const seg=GLSegments[key]

        if(config.type=="REQUIRED" && seg=="" ||seg==null||seg==undefined)
        return "False-Validate Segment Type"
        
        if(seg.length>key.length)
        return "False-Length Validation failed "
}   
    return "True- Validation Passed"
}

const GLConfig = {
    'CO' : { type: 'REQUIRED'},
    'MAJ': { type: 'NORMAL'},
    'SET': { type: 'NORMAL'},
    'MIN': { type: 'REQUIRED'}
  }

  const GLSegmentsLengthFail = {
    'CO' : '111',
    'MAJ': '111',
    'SET': '111',
    'MIN': '000'
  }
  const GLSegmentsNullFail = {
    'CO' : null,
    'MAJ': '111',
    'SET': '111',
    'MIN': '000'
  }
  const GLSegmentsReqFail = {
    'CO' : null,
    'MAJ': '111',
    'SET': '111',
    'MIN': '000'
  }
  const GLSegmentsUndeFail = {
    'CO' : null,
    'MAJ': '111',
    'SET': '111',
    'MIN': '000'
  }
  const GLSegments = {
    'CO' : '11',
    'MAJ': '111',
    'SET': '111',
    'MIN': '000'
  }
console.log(validate(GLConfig,GLSegmentsLengthFail));
console.log(validate(GLConfig,GLSegmentsNullFail));
console.log(validate(GLConfig,GLSegmentsReqFail));
console.log(validate(GLConfig,GLSegmentsUndeFail));
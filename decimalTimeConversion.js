function toIndustrial(time){
	if (typeof time === "number")
	{
	const industrialHours = (time * 60 / 3600).toFixed(2)
	return Number(industrialHours)
	}
	if (typeof time === "string"){
	  const hm = time.split(':')
	  const industrialHours = ((Number(hm[0]) * 60 + Number(hm[1])) * 60 / 3600).toFixed(2)
	  return Number(industrialHours)
	}
	}
  
  function toNormal(time){
	const totalMin = time * 3600 / 60
	  const min = (totalMin.toFixed() % 60) < 10 ? `0${(totalMin.toFixed() % 60)}` : (totalMin.toFixed() % 60)
	  const hours = Math.floor((totalMin.toFixed())/60)
	  const res = `${hours}:${min}`
	return res;
  }




export const formattedDate = () => {
    const hours = new Date().getHours()
    const mins = new Date().getMinutes()
    return `${hours < 10 ? '0' + hours : hours } : ${mins < 10 ? '0' + mins : mins }`
}

export const downloadMedia = (e, originalImage) => {
    e.preventDefault();
    try{
        fetch(originalImage).then(res => res.blob()).then(
            blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;

                const nameSplit = originalImage.split('/');
                const duplicateName = nameSplit.pop();
                a.download = "" + duplicateName + "";

                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url)
            }
        ).catch(error => console.log('Error while downloading the image ', error))
    }catch(err){
        console.log('Error while downloading the image ', err)
    }
}
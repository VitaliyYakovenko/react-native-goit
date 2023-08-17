

export function formatDateAndTime() {
    const date = new Date();
    
    const day = ("0" + date.getDate()).slice(-2);
    
    const months = [
        "січня", "лютого", "березня", "квітня", 
        "травня", "червня", "липня", "серпня", 
        "вересня", "жовтня", "листопада", "грудня"
    ];
    const month = months[date.getMonth()];
    
    const year = date.getFullYear();
    
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    
    return `${day} ${month}, ${year} | ${hours}:${minutes}`;
}

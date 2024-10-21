const generateIframe = (url) => {
    let embedUrl;

    if (url.includes("youtube.com") || url.includes("youtu.be")) {
        const videoId = url.split("v=")[1] || url.split("/").pop();
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    else if (url.includes("vimeo.com")) {
        const videoId = url.split("/").pop();
        embedUrl = `https://player.vimeo.com/video/${videoId}`;
    }
    if (embedUrl) {
        return `<iframe width="560" height="315" src="${embedUrl}" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    return "<p>URL no válida o no soportada</p>";
};

export default generateIframe;
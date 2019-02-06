class Dragger {
    constructor() {
        this.target = null;
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('mouseup', this.stopDragging)
    }
    trackPosition = (event) => {
        this.mouseX = event.pageX;
        this.mouseY = event.pageY;
    }
    move = () => {
        const draggableComponent = this.target.parentElement;
        draggableComponent.style.transform = `translate(${this.mouseX - this.offsetX}px,${this.mouseY - this.offsetY}px)`;
    }
    drag = (event) => {
        this.trackPosition(event);
        if(this.target) {
            event.preventDefault();
            this.move();
        }
    }
    addHandle = (element) => {
        element.addEventListener('mousedown', this.startDragging);
    }
    addMultipleHandles = (elements) => {
        elements.forEach(this.addHandle);
    }
    startDragging = (event) => {
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
        this.target = event.target;
    }
    stopDragging = () => {
        this.target = null;
    }
}

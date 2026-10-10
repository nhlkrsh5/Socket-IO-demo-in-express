export const DemoFunction = async (a,b) => {
    try {
        const res = a+b
        return res;
    } catch (error) {
        console.log("Something went wrong!");
        
    }
}
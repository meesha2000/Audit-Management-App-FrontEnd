export const Microservices : {[key: string]: string} = {
    // give like this : 
    // "ms-name" : "http://localhost:[port-no.]/[context-root]"
    "auth"      : "http://localhost:8100/auth",
    "benchmark" : "http://localhost:8250/benchmark",
    "checklist" : "http://localhost:8200/checklist",
    "severity"  : "http://localhost:8300/severity"

    // "auth"      : "http://35.81.26.112:8100/auth",
    // "benchmark" : "http://35.81.26.112:8250/benchmark",
    // "checklist" : "http://35.81.26.112:8200/checklist",
    // "severity"  : "http://35.81.26.112:8300/severity"
    
}
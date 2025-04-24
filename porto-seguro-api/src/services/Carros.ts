
import Carro from "./Types"

export async function getCarros() {
    const promise = await fetch("http://localhost:8080/carros")

    return promise.json()
}

export async function getCarroByChassi(chassi: string) {
    const promise = await fetch(`http://localhost:8080/carros/${chassi}`)

    return promise.json()
}

export async function novoCarro(objetoCarro: Carro) {
    const promise = await fetch(`http://localhost:8080/carros/` ,{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objetoCarro)
    })

    if (!promise.ok) {
        throw new Error(`Erro: ${promise.status}`)
    }

    return promise.json()
}

export async function atualizarCarro(chassi: string, objetoCarro: Carro) {
    const promise = await fetch(`http://localhost:8080/carros/${chassi}` , {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objetoCarro)
    })

    if (!promise.ok) {
        throw new Error(`Erro: ${promise.status}`)
    }

    return promise.json()
}

export async function deletarCarro(chassi: string) {
    const promise = await fetch(`http://localhost:8080/carros/${chassi}`, {
        method: "DELETE",
        mode: "cors"
    })

    if (!promise.ok) {
        throw new Error(`Erro: ${promise.status}`);
    }

    return true;
}

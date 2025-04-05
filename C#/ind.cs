using System.Colections;
using System.Colections.Generic;
using UnityEngine;

public class EnemyAI : MonoBehaviour {
    int speed = 5;//tipo int passando o valor inteiro
    float attackRange = 2.0f; //tipo float passando o valor com ponto flutuante

    string enemyName = "Goblin"; //tipo string passando o nome entre aspas duplas

    bool isDead = true; //tipo bool passando o valor verdadeiro ou falso
    // Start is called before the first frame update
    // se um inimigo esta morto ou não, se ele estiver morto o valor é true, se não o valor é false
    void Start() {
        // Inicia o inimigo com um nome e uma velocidade
        Debug.Log("Inimigo criado: " + enemyName + " com velocidade: " + speed);
    }

}
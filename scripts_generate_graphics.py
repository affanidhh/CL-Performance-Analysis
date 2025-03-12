# generate_graphics.py
import matplotlib.pyplot as plt
from load_data import psg_data, man_city_data, chelsea_data, rb_leipzig_data

# Fonction pour générer des graphiques en barres pour les buts marqués
def plot_goals_scored():
    plt.figure(figsize=(10, 6))
    plt.bar(psg_data["years"], psg_data["goals"], label='PSG', alpha=0.6)
    plt.bar(man_city_data["years"], man_city_data["goals"], label='Man City', alpha=0.6)
    plt.bar(chelsea_data["years"], chelsea_data["goals"], label='Chelsea', alpha=0.6)
    plt.bar(rb_leipzig_data["years"], rb_leipzig_data["goals"], label='RB Leipzig', alpha=0.6)
    plt.xlabel('Année')
    plt.ylabel('Buts Marqués')
    plt.title('Buts Marqués par Saison (2012-2023)')
    plt.legend()
    plt.savefig('../images/goals_scored_by_season.png')
    plt.show()

# Fonction pour générer des graphiques linéaires pour les Expected Goals (xG)
def plot_expected_goals():
    plt.figure(figsize=(10, 6))
    plt.plot(psg_data["years"], psg_data["xg"], label='PSG', marker='o')
    plt.plot(man_city_data["years"], man_city_data["xg"], label='Man City', marker='o')
    plt.plot(chelsea_data["years"], chelsea_data["xg"], label='Chelsea', marker='o')
    plt.plot(rb_leipzig_data["years"], rb_leipzig_data["xg"], label='RB Leipzig', marker='o')
    plt.xlabel('Année')
    plt.ylabel('Expected Goals (xG)')
    plt.title('Expected Goals (xG) par Saison (2012-2023)')
    plt.legend()
    plt.savefig('../images/expected_goals_by_season.png')
    plt.show()

# Générer les graphiques
plot_goals_scored()
plot_expected_goals()
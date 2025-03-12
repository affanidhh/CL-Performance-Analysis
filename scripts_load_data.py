# load_data.py
import json

def load_data(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

psg_data = load_data('../data/psg_data.json')
man_city_data = load_data('../data/man_city_data.json')
chelsea_data = load_data('../data/chelsea_data.json')
rb_leipzig_data = load_data('../data/rb_leipzig_data.json')
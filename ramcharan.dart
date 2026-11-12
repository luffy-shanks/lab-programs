import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.red),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  final List<Map<String, dynamic>> contacts = const [
    {'name': 'Police', 'phone': '100', 'icon': Icons.local_police},
    {'name': 'Ambulance', 'phone': '108', 'icon': Icons.medical_services},
    {'name': 'Fire Station', 'phone': '101', 'icon': Icons.local_fire_department},
    {'name': 'Family', 'phone': '9876543210', 'icon': Icons.person},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Emergency Contacts'),
        backgroundColor: Colors.red,
        foregroundColor: Colors.white,
      ),
      body: ListView.builder(
        itemCount: contacts.length,
        itemBuilder: (context, index) {
          final contact = contacts[index];
          return ContactCard(
            contact: contact,
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => DetailsPage(contact: contact),
                ),
              );
            },
          );
        },
      ),
    );
  }
}

// Reusable Contact Card
class ContactCard extends StatelessWidget {
  final Map<String, dynamic> contact;
  final VoidCallback onTap;

  const ContactCard({
    super.key,
    required this.contact,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.all(10),
      child: ListTile(
        leading: Icon(contact['icon'], color: Colors.red, size: 30),
        title: Text(contact['name']),
        subtitle: Text(contact['phone']),
        trailing: const Icon(Icons.arrow_forward),
        onTap: onTap,
      ),
    );
  }
}

// Contact Details Page
class DetailsPage extends StatelessWidget {
  final Map<String, dynamic> contact;

  const DetailsPage({super.key, required this.contact});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Contact Details'),
        backgroundColor: Colors.red,
        foregroundColor: Colors.white,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(contact['icon'], size: 70, color: Colors.red),
            const SizedBox(height: 20),
            Text(contact['name'],
                style: const TextStyle(fontSize: 25)),
            const SizedBox(height: 10),
            Text('Phone: ${contact['phone']}',
                style: const TextStyle(fontSize: 18)),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Contact selected')),
                );
              },
              child: const Text('Call Contact'),
            ),
          ],
        ),
      ),
    );
  }
}
